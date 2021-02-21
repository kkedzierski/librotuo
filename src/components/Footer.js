import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Librotuo</h1>
                    <p>Staramy się stworzyć najlepsze miejsce do wyszukiwania książek</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FotterLinkTitle>Skontaktuj się z nami</FotterLinkTitle>
                    <FooterLink>
                        <a href="mailto:librotuo@gmail.com">
                            librotuo@gmail.com
                        </a>
                    </FooterLink>
                    <FooterLinkPolicy to="/policy">Polityka prywatności</FooterLinkPolicy>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FotterLinkTitle>Media społecznościowe</FotterLinkTitle>
                    <FooterLink>
                    <a href ="https://www.instagram.com/asyrekawow/">
                        Instagram
                    </a>
                    </FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    margin: 0;
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px){
        grid-template-columns: 1fr;
    }
`

const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px){
        padding: 1rem;
    }
`

const FotterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled.div`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;
    cursor: pointer;

    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
    a{
        display: flex;
        text-decoration: none;
        margin-bottom: 0.5rem;
        font-size: 14px;
        color: #3d3d4e;
        &:hover{
            color: #f26a2e;
            transition: 0.3s ease-out;
        }
    }
`

const FooterLinkPolicy = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;
    cursor: pointer;

    &:hover{
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
`