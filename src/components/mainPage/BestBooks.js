import React, {useState} from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import withoutThumbnail from '../../assets/images/no-book.png'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import BookModal from '../BookModal'

const BestBooks = () => {

    
const data = useStaticQuery(graphql`
    query BestBooksQuery {
        allBooksJson {
        edges {
            node {
            alt
            button
            name
            selfLink
            img {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            
            }
        }
        }
    }  
`);

function getBestBooks(data){
    const bestBooksArray = [];
    data.allBooksJson.edges.forEach((item, index) =>{
        bestBooksArray.push(
            <ProductCard key={index}>
                <ProductImg src={item.node.img.childImageSharp.fluid.src}
                fluid={item.node.img.childImageSharp.fluid} 
                alt={item.node.alt}/>
                <ProductInfo>
                    <TextWrap>
                        <ProductTitle>{item.node.name}</ProductTitle>
                    </TextWrap>
                    <button onClick={() => handleBookJson(item.node.selfLink)}>{item.node.button}</button>
                </ProductInfo>
            </ProductCard>
        )
    } )

    return bestBooksArray;
}

const [bookDetails, setBookDetails] = useState();
const [apiKey, setApiKey] = useState("AIzaSyDhRJe2nEkW1hfDn0ajPly6Mjb1NXRidQg");

const handleBookJson = (selfLink) => {
    if(selfLink){
        axios.get(`${selfLink}?q=&key=${apiKey}`)
        .then(res => {
            setBookDetails(res.data);
        }).catch(err => {
            toast.error(`${err.response.data.error.message}`);
        })
    }


}

const handleBookDetail = () =>{
    let items;
    if (typeof bookDetails != "undefined"){
        items = [bookDetails].map((item, i) => {
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
                <BookModal 
                thumbnail={thumbnail} 
                title={item.volumeInfo.title}
                pageCount={item.volumeInfo.pageCount}
                language={item.volumeInfo.language}
                authors={item.volumeInfo.authors}
                publisher={item.volumeInfo.publisher}
                description={item.volumeInfo.description}
                previewLink={item.volumeInfo.previewLink}
                    />
            </div>
        )
        
        });
    }
       
    
    return(
        <div>{items}</div>
        
    ) 

    }

    return (
        <ProductsContainer>
            <ProductsHeading>Top książki</ProductsHeading>
            <ProductWrapper>{getBestBooks(data)}</ProductWrapper>
            {handleBookDetail()}
        </ProductsContainer>
    )
}

export default BestBooks

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 0.5rem calc((100vw - 1300px) / 2);
    color: #fff;
    background-color: #efefef;
`

const ProductsHeading = styled.h1`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 868px){
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`
const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;

    @media screen and (max-width: 280px){
        padding: 0 1rem;
    }

    button{
        background: #F26A2E;
        white-spac: nowrap;
        padding: 16px 40px;
        color: #fff;
        outline: none;
        border: none;
        position: absolute; 
        top: 420px;
        left: 53px;
        font-size: 14px; 
        min-width: 100px;
        text-decoration: none;
        transistion: 0.3s !important;
        border-radius: 50px;
        cursor: pointer;

        &:hover {
            background: #077BF1;
            transform: translateY(-2px);
        }

    @media screen and (max-width: 768px){
        left: 42px;
    }
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`

const ProductTitle = styled.h1`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`