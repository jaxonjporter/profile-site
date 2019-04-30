import React from 'react';
import styled from 'styled-components'

const Navbar = () => {
  return(
    <NavDiv>
      <Right>
        <Par>
          <h3>One</h3>
        </Par>
        <Par>
          <h3>Two</h3>
        </Par>
        <Par>
          <h3>Three</h3>
        </Par>
      </Right>
      <Left>
        <Par>
          <h3>one</h3></Par>
        <Par><h3>two</h3></Par>
      </Left>
    </NavDiv>
  )
}

export default Navbar

const Par = styled.div`
padding: 5px;

:hover {
  background: #ededed;
}
`


const NavDiv = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between
`

const Right = styled.div`
  border: 1px solid white;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

`
const Left = styled.div`
  border: 1px solid white;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

`