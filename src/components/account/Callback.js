import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'

const Callback = () => {
    return (
        <AccountContainer>
            <Gap/>
            <h2>Witaj w Librotuo!</h2>
            <p style={{marginBottom: '1rem'}}>Dodawaj swoje książki na regał i ciesz się chwilą</p>
            <Button primary="true" round="true" to="/account" >Przejdź do konta</Button>
        </AccountContainer>
    )
}

export default Callback

const AccountContainer = styled.div`
    background: #0c0c0c;
    color: #fff;
    padding: 2rem;
    margin-top: -80px;
    text-align: center;
`

const Gap = styled.div`
    height: 80px;
`
