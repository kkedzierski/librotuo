import React, {useState} from 'react'
import styled from 'styled-components'
import bookHeadBackground from '../../assets/images/book-head-background2.jpg'
import withoutThumbnail from '../../assets/images/no-book.png'
import {BsSearch} from 'react-icons/bs'
import {Spinner} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import BookCard from './BookCard'

function Books() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState([]);

    const handleSubmit = () => {
        setLoading(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
        .then(res => {
            if(res.data.items.length > 0){
                setCards(res.data.items);
                setLoading(false);
            }
        }).catch(err => {
            setLoading(true);
            toast.error(`${err.response.data.error.message}`);
        })

    }
    const booksHeader = () => {
        return (
            <MainImage>
                {/* Overlay */ }
                <SearchBookForm>
                    <h1>Przeszukaj bibliotekę</h1>
                    <input placeholder="Wpisz nazwę książki lub autora" value={query} 
                    onChange={e => setQuery(e.target.value)} 
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            handleSubmit();
                        }
                      }}/>
                    <button type="submit" onClick={handleSubmit}> <BsSearch/></button>
                </SearchBookForm>
            </MainImage>
        )
    }

    const handleCards = () =>{
        const items = cards.map((item, i) => {
            let thumbnail = '';
            if (typeof item.volumeInfo.imageLinks != "undefined") {
                if(item.volumeInfo.imageLinks.thumbnail){
                    thumbnail = item.volumeInfo.imageLinks.thumbnail;
                }
        }else{
            thumbnail = withoutThumbnail.toString();
        }
            
            return(
                <div key={item.id}>
                    <BookCard 
                    thumbnail={thumbnail} 
                    title={item.volumeInfo.title}
                    pageCount={item.volumeInfo.pageCount}
                    language={item.volumeInfo.language}
                    authors={item.volumeInfo.authors}
                    publisher={item.volumeInfo.publisher}
                    description={item.volumeInfo.description}
                    previewLink={item.volumeInfo.previewLink}
                    selfLinkForBookshelf={item.selfLink}
                        />
                    
                </div>
            )
            
        });
        if(loading){
            return(
                <SpinnerContainer>
                    <Spinner style={{ width: '3rem', height: '3rem' }}/>
                </SpinnerContainer>
            )
        }else{
            return(
            <BooksContainer>
                <BooksContent>{items}</BooksContent>
            </BooksContainer>
            )

        }
    }

    return (
        <div>          
            {booksHeader()}
            {handleCards()}
            <ToastContainer />
        </div>

    )
}

    
export default Books

const MainImage = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;

    background: linear-gradient(
    180deg, 
    rgba(0,0,0,0.5) 0%, 
    rgba(0,0,0,0.5) 35%,
    rgba(0,0,0,0.1) 100%), 
    url(${bookHeadBackground}) no-repeat center;
    background-size: cover;
    color: #fff;
    align-items: center;
    width: 100%;
    height: 80vh;
    margin-top: -80px;
`
const SearchBookForm = styled.div`
text-align: center;
letter-spacing: 2px;
h1{
    font-size: clamp(1.5rem, 4vw, 2rem);
}

input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 100vh;
    height: 48px;
    border: none;
}
button[type=submit]{
    border: none;
    color: white;
    background-color: #F26A2E;
    width: 10vh;
    height: 49px;
    cursor: pointer;
}

button:hover{
    background-color: #077BF1;
    transform: translateY(-2px);
}

@media screen and (max-width: 1024px){
    font-size: 14px;
    display: flex;
    flex-direction: column;
    input {
        width: 70vh;
    }

    button[type=submit]{
        width: 70vh;
        height: 40px;
    }
}

@media screen and (max-width: 768px){
    font-size: 14px;
    display: flex;
    flex-direction: column;
    input {
        width: 50vh;
    }

    button[type=submit]{
        width: 50vh;
        height: 40px;
    }
}

@media screen and (max-width: 320px){
    font-size: 14px;
    display: flex;
    flex-direction: column;
    input {
        width: 50vh;
        margin-left: 1rem;
    }

    button[type=submit]{
        width: 50vh;
        height: 40px;
        margin-left: 1rem;
    }
}`

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
` 

const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`
const BooksContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    padding: 2rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`