import React from 'react'
import styled from 'styled-components'
import {GiBookshelf} from 'react-icons/gi'

export const BookshelfAddButton = () => {
    



    return (
        <BookshelfAddContainer>
        <GiBookshelf /> 
            <p>Dodaj na regał</p>
            <p>Trwają pracę nad dodaniem tej funkcjonalności</p>
        </BookshelfAddContainer> 
    )
}


const BookshelfAddContainer = styled.div`
    display: flex
    font-size: 2rem;
    background: #F26A2E;
    padding: 0.3rem 1rem;
    color: #fff;
    width: 233px;
    height: 2rem;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    transistion: 0.3s !important;

    &:hover {
        background: #077BF1;
        transform: translateY(-2px);
    }

    p{
        padding: 0.5rem 0.2rem;
        font-size: 12px;
    }


`
