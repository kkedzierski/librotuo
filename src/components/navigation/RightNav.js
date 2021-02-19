import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { menuData } from '../../data/MenuData';
import { Link } from "gatsby"
import { isAuthenticated } from '../../utils/auth'


const RightNav = ({open}) => {
    return (
        <NavMenu open={open}>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
        <NavBtn>
            <Button primary="true" round="true" big="true" to="/account">
            {isAuthenticated() ? 'Twój regał' : 'Zaloguj się'}
              </Button>
        </NavBtn>
      </NavMenu>
      
    )
}

export default RightNav

const NavLink = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 18px 10px;
  justify-content: center;
  cursor: pointer;

  &:hover{
    color: #f26a2e;
    transition: 0.3s ease-out;
}
`


const NavMenu = styled.div`
display: none;
@media screen and (max-width: 768px) {
    display:flex;
    flex-flow: column nowrap;
    background-color: #0D2538;
    align-items: center;
    position: fixed;
    padding: 3.5rem 0px;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: tranform 0.3s ease-in-out;
  }
    
    
  
`

const NavBtn = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`