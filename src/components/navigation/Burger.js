import React, {useState} from 'react'
import styled from 'styled-components'
import RightNav from './RightNav';

const Burger = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Bars open={open} onClick={() => setOpen(!open) }>
                <div />
                <div />
                <div />
            </Bars>
            <RightNav open={open}/>
        </>
    )
}

export default Burger

const Bars = styled.div`
display: none;
@media screen and (max-width: 768px) {
  width: 2rem;
  height: 2rem;
  margin: 1rem 1rem;
  positon: fixed;
  display: flex;
  top: 2rem;
  right: 3rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({open}) => open ? '#077BF1' : '#F26A2E'};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1){
          transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
      &:nth-child(2){
        transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? '0' : '1'};
        }
      &:nth-child(3){
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
  }
}
`