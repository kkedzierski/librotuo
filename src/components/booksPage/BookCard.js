import React, {useState} from 'react'
import styled from 'styled-components'
import BookModal from '../BookModal'
const BookCard = ({
    thumbnail,
    title,
    pageCount,
    language,
    authors,
    publisher,
    description,
    previewLink,
    selfLinkForBookshelf
}) => {

    const [showResults, setShowResults] = useState(false)
    const handleBookDetails = () => setShowResults(true)
    return( 
    <Card style={{width: '233px'}}>
        
        <CardImg onClick={handleBookDetails}> 
            <img src={thumbnail} alt={title} 
                style={{ width: '100%', height: '300px', cursor: 'pointer' }} />
        </CardImg>
       
        <CardBody>

        <button onClick={handleBookDetails}>
             Open book</button>
            <CardTitle>{title}</CardTitle>
        </CardBody> 
        { showResults ? 
        <BookModal 
        thumbnail={thumbnail} 
        title={title}
        pageCount = {pageCount}
        language={language}
        authors={authors}
        publisher={publisher}
        description= {description}
        previewLink={previewLink}
        selfLinkForBookshelf={selfLinkForBookshelf}
            /> : null }
        
    </Card>
    )
}

export default BookCard

const CardTitle = styled.h3`
    padding: 0.5rem;
`

const Card = styled.div`
    border-style: ridge;
    padding: 0.5rem;
    width: 100%;
    transition: 0.2s ease;

`

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
const CardBody = styled.div`
    display: flex;
    flex-direction: column;

    button{
        border: none;
        color: white;
        background-color:  #077BF1;
        cursor: pointer;
        height: 100%;
        padding: 0.5rem;
    }
    
    button:hover{
        background-color: #F26A2E;
    }
    
`