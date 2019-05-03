import React, { useState, } from 'react';
import styled from 'styled-components'
import {Link,} from 'react-router-dom'
import revlogo from '../../images/reverseJaxonLogo.png'
import logo from '../../images/JaxonLogo.png'
import posed from 'react-pose'
// import TestBox from './TestBox'

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [size, setSize] = useState()

  const changeActive = (item) => {
    debugger
    setActive(item)
  }

  


  const Homeornot = () => {
   if (window.location.pathname === '/') {
      return (<ImgDiv src={revlogo} />)
    } else {
      return(<ImgDiv src={logo} />)
    }
  }

  const nothome = () => {
    if (window.location.pathname === '/') {
      return null
    } else {
      return {color: '#313947'}
    }
  }

  const Nav = () => {
    if (window.innerWidth > 20) { return (
      <NavDiv>
      <LeftRight>
        <NavItem as={Link} to='/' onClick={() => changeActive('home')}>
            {Homeornot()}
        </NavItem>
        {/* {/* <TestBox /> */}
        {/* <TestBox /> */}
      </LeftRight>
      <LeftRight>
        <NavItem as={Link} to='/about' onClick={() => changeActive('about')}>
          <NavText style={nothome()}>About</NavText>
        </NavItem>
        <NavItem>
          <NavText style={nothome()}>Contact</NavText>
        </NavItem>
      </LeftRight>
      </NavDiv>
    )} else {
      return (
      <>
      </>)
    }
  }

  return(
    <Nav />
    // <NavDiv>
    //   <LeftRight>
    //     <NavItem as={Link} to='/' onClick={() => changeActive('home')}>
    //         {Homeornot()}
    //     </NavItem>
    //     {/* {/* <TestBox /> */}
    //     {/* <TestBox /> */}
    //   </LeftRight>
    //   <LeftRight>
    //     <NavItem as={Link} to='/about' onClick={() => changeActive('about')}>
    //       <NavText style={nothome()}>About</NavText>
    //     </NavItem>
    //     <NavItem>
    //       <NavText style={nothome()}>Contact</NavText>
    //     </NavItem>
    //   </LeftRight>
    // </NavDiv>
  )
}

export default Navbar

const NavItem = styled.div`
padding: 5px 15px;
color: #fff8f4;

:hover {
  color: #ededed;
}
`

const Shakeh3 = posed.h3({
  hoverable: true,
  hover: {
    applyAtEnd: { x: 0 },
    applyAtStart: { x: -1 },
    x: 0,
    transition: {
      type: "spring",
      stiffness: 1000,
      damping: 5,
      duration: 3
    }
  }
});


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
const NavText = styled(Shakeh3)`
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