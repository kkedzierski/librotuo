import React from 'react'
import styled from 'styled-components'
import EmailBg from '../../assets/images/email.jpg'
import { Button } from '../Button'


const SearchBook = (props) => {
    return (
        <SearchBookContainer>
            <SearchBookContent>
                <h1>Wejdź do biblioteki i znajdź książkę</h1>
                <p>Wpisz nazwę książki i sprawdź jej dostępność</p>
                <form action ="#">
                    <FormWrap>
                        <Button
                        primary="true"
                        to="/books"
                        round="true">
                            Wyszukaj
                        </Button>
                    </FormWrap>
                </form>
            </SearchBookContent>
        </SearchBookContainer>
    )
}

export default SearchBook

const SearchBookContainer = styled.div`
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.5) 0%, 
        rgba(0,0,0,0.5) 35%,
        rgba(0,0,0,0.1) 100%), 
    url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchBookContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
    }

    form {
        z-index: 10;
    }
`

const FormWrap = styled.div`
    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 300px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        paddding: 0 1rem;

        input {
            margin-bottom: 1rem;
            width: 100%:
            margin-right: 0;
        }
    }
    
`