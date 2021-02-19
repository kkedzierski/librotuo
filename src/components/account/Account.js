import React from 'react'
import styled from 'styled-components'
import { getProfile, logout } from '../../utils/auth'
import BookCard from '../booksPage/BookCard';

const Account = ({thumbnail,
    title,
    pageCount,
    language,
    authors,
    publisher,
    description,
    previewLink,
    selfLinkForBookshelf}) => {
    const user = getProfile();
    
    return (
        <AccountContainer>
            <Gap/>
            <h2>Cześć {user.given_name}</h2>
            <UserPictureContainer>
                <img src={user.picture} alt="user"/>
            </UserPictureContainer>
                    <AccountButtonContainer>
                    <button onClick={e => {
                        logout()
                        e.preventDefault();
                        }}>Wyloguj się</button>
                        </AccountButtonContainer>
            <BookShelfContainer>
                <h2>Twój regał</h2>
                <BookCard   thumbnail={thumbnail} 
                            title={title}
                            pageCount = {pageCount}
                            language={language}
                            authors={authors}
                            publisher={publisher}
                            description= {description}
                            previewLink={previewLink}
                            selfLinkForBookshelf={selfLinkForBookshelf}/>
            </BookShelfContainer>
        </AccountContainer>
    )
}

export default Account

const AccountContainer = styled.div`
    background: #0c0c0c;
    color: #fff;
    padding: 2rem;
    margin-top: -80px;
`

const Gap = styled.div`
    height: 80px;
`
const UserPictureContainer = styled.div`
    display: flex;
    padding: 0.5rem 0;
`

const BookShelfContainer = styled.div`
    text-align: center;
    justify-content: center;
    margin-top: 1rem;
`

const AccountButtonContainer = styled.div`
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