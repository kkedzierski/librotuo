import React, {useState} from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import { BookshelfAddButton } from '../components/BookshelfAddButton';


const BookModal = ({thumbnail,
    title,
    pageCount,
    language,
    authors,
    publisher,
    description,
    previewLink,
    selfLinkForBookshelf}) => {
        const [modal, setModal] = useState(true);
        const turnOffModal = () => {
            setModal(false);
        }

        const getLinkToLibrary = (titleObject, website) => {
            let baseURL = '';
            switch(website) {
                case 'docer':
                  baseURL = 'https://docer.pl/show/?q=';
                  break;
                case 'woblink':
                  baseURL = 'https://woblink.com/katalog/darmowe?szukasz=';
                  break;
                case 'ceneo':
                  baseURL = 'https://www.ceneo.pl/Ksiegarnia;szukaj-';
                  break;
                default:
                    break;
              }
            // title modification
            const titleString = JSON.stringify(titleObject);
            const beginOfTitleIndex = (titleString.indexOf(':"')+2);
            const endOfOfTitleIndex = (titleString.indexOf('}"')-1);
            const titleResult = titleString.slice(beginOfTitleIndex, endOfOfTitleIndex);
            const resultURL = baseURL + titleResult.replace(/ /g, '+');
            // end title modification
            return resultURL;
        }
      
        return(
            <ReactModal isOpen={modal} ariaHideApp={false}>
                <CardDetailContainer>
                    <CardDetailHeader>
                        
                    <Button onClick={turnOffModal}>
                        <span>X</span>
                    </Button>
                    <img src={thumbnail} alt={title}
                        style={{ height: '300px', 
                        borderStyle:'ridge',
                        marginRight: '1rem',
                        padding: '0.5rem' }} />
                    <BookshelfAddButton selfLinkForBookshelf={selfLinkForBookshelf}/>    
                    </CardDetailHeader>
                    <CardDetailBody>
                        <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{title}</div>
                        <p>Ilość stron: {pageCount ? pageCount : 'brak informacji'}</p>
                        <p>Język: {language ? language : 'brak informacji'}</p>
                        <p>Autorzy: {authors ? authors : 'brak informacji'}</p>
                        <p>Publikacja: {publisher ? publisher : 'brak informacji'}</p>
                        <p>Opis: {description ? description : 'brak informacji'}</p>
                        <button>
                            <a href={previewLink} target='_blank' rel="noreferrer">Podejrzyj książkę</a>
                        </button>
                    </CardDetailBody>
                    <BookDownloadWebsites >
                        <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Sprawdź czy jest do pobrania</div>
                        <CardImg> 
                            <a href={getLinkToLibrary({title}, 'docer')} target='_blank' rel="noreferrer">
                                <img src ="https://static.docer.pl/static/img/logo.png" alt="docer" />
                            </a>
                        </CardImg>
                        <CardImg>
                            <a href={getLinkToLibrary({title}, 'woblink')} target='_blank' rel="noreferrer">
                                <img src ="https://woblink.com/images/nw_logoB.svg" alt="woblink" />
                            </a>
                        </CardImg>
                    </BookDownloadWebsites>
                    <BookStoreWebsites>
                        <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Sprawdź w sklepach</div>
                        <CardImg> 
                            <a href={getLinkToLibrary({title}, 'ceneo')} target='_blank' rel="noreferrer">
                                <img src ="https://www.ceneo.pl/Content/img/icons/logo-ceneo-simple-orange.svg" alt="ceneo"/>
                            </a>
                        </CardImg>
                    </BookStoreWebsites>
                </CardDetailContainer>
            </ReactModal>
        )
    }

export default BookModal


const CardImg = styled.div`
filter: brightness(70%);
transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
    filter: brightness(100%);
    // cursor: pointer;
}

a > img{
    padding: 1rem 0;
    width: 100px;
}

`

const CardDetailContainer = styled.div`
display: flex;

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    flex-flow: column wrap;
}
`
const CardDetailHeader = styled.div`
    img{
        width: 233px;
    }
`



const Button = styled.div`
margin-top: 5px;
margin-right: 5px;
position:absolute;
top:0;
right:0; 
border: none;
color: white;
background-color: #077BF1;
cursor: pointer;
padding: 0.5rem;

&:hover{
    background-color: #F26A2E;
}
`
const CardDetailBody = styled.div`
p{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
}

button{
    margin: 0.5rem 0;
    border: none;
    color: white;
    background-color:  #077BF1;
    cursor: pointer;
    padding: 0.5rem;
}

button:hover{
    background-color: #F26A2E;
}

button a{
    text-decoration: none;
    color: white;
}

`

const BookDownloadWebsites = styled.div `
display: flex;
flex-direction: column;
flex-flow: column wrap;
padding: 0 1rem;

`
const BookStoreWebsites = styled.div `
display: flex;
flex-direction: column;
flex-flow: column wrap;
padding: 0 1rem;

`


