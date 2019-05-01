import React from 'react'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'

const NoMatch = ({history}) => {

  return(
      <CoverDiv>
        <MidDiv>
          <h1>
          You are nowhere
          </h1>
          <h2>
          You are nowhere
          </h2>
          <ButtonBlue as='a' href='/'>
           Go Home
          </ButtonBlue>
        </MidDiv>
      </CoverDiv>
  )
}


const CoverDiv = styled.div`
  height: 100vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ededed
`

const ButtonBlue = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: .8rem 1.4rem;
  background-color: #2979ff;
  color: white;
  cursor: pointer;
  outline: none;

  :hover {
    color: white;
    background-color: #498dff;
  }

`;

const MidDiv = styled.div`
`

export default NoMatch;