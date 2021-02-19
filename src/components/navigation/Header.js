import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import { menuData } from '../../data/MenuData'
import { Button } from "../Button"
import Burger from "./Burger"
import { useAuth0 } from '@auth0/auth0-react'
import { isAuthenticated } from '../../utils/auth'

const Header = () => {
  const { loginWithRedirect } = useAuth0();

  return (
   <Nav>
     <NavLink to="/">Librotuo</NavLink>
     
     <NavMenu>
       {menuData.map((item, index) => (
         <NavLink to={item.link} key={index}>
           {item.title}
         </NavLink>
       ))}
     </NavMenu>
     <NavBtn>
       <Button onClick={() => loginWithRedirect()} primary="true" round="true" to="/account">
         {isAuthenticated() ? 'Twój regał' : 'Zaloguj się'}
        </Button>
     </NavBtn>
     <Burger />
   </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;

`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &:hover{
    color: #f26a2e;
    transition: 0.3s ease-out;
}
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`