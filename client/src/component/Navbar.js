import React, { useState, useEffect, } from 'react';
import styled from 'styled-components'
import {Link,} from 'react-router-dom'
import revlogo from '../images/reverseJaxonLogo.png'
import logo from '../images/JaxonLogo.png'

const Navbar = () => {
  const [active, setActive] = useState('')

  const changeActive = (item) => {
    debugger
    setActive(item)
  }


  const Homeornot = () => {
   if (window.location.pathname == '/') {
      return (<ImgDiv src={revlogo} />)
    } else {
      return(<ImgDiv src={logo} />)
    }
  }

  return(
    <NavDiv>
      <LeftRight>
        <NavItem as={Link} to='/' onClick={() => changeActive('home')}>
            {Homeornot()}
        </NavItem>
      </LeftRight>
      <LeftRight>
        <NavItem as={Link} to='/about' onClick={() => changeActive('about')}>
          <NavText>About</NavText>
        </NavItem>
        <NavItem>
          <NavText>Contact</NavText>
        </NavItem>
      </LeftRight>
    </NavDiv>
  )
}

export default Navbar

const NavItem = styled.div`
padding: 5px 15px;
color: white;

:hover {
  color: grey;
}
`


const NavDiv = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 5px;
  justify-content: space-between
`

const LeftRight = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

`
const NavText = styled.h3`
  font-size: 1.7em;
`
const ImgDiv = styled.img`
  width: 45px;
  margin-top: 10px;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.2); 
  }

`