import React, { useState } from 'react';
import styled from 'styled-components'
import {Link,} from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState('')

  const changeActive = (item) => {
    debugger
    setActive(item)
  }

  return(
    <NavDiv>
      <LeftRight>
        <NavItem as={Link} to='/' onClick={() => changeActive('home')}>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem as={Link} to='/about' onClick={() => changeActive('about')}>
          <NavText>About</NavText>
        </NavItem>
        <NavItem>
          <NavText>Contact</NavText>
        </NavItem>
      </LeftRight>
      <LeftRight>
        <NavItem>
          <h3>Info</h3>
        </NavItem>
        <NavItem>
          <h3>Help</h3>
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