import React from 'react'
import styled, { css, } from 'styled-components';

const Footer = () => {
  return (
    <FooterDiv>
      <FootText>
        @ Copyright JaxonPorter 2019
      </FootText>
    </FooterDiv>
  )
}

const sizes = {
  desktop: 992,
  tablet: 1068,
  phone: 606,
}



const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})



const FootText = styled.p`
color: #fff8f4;
font-size: 1em;
font-family: 'Noto Sans TC', sans-serif;
  padding: 5px;
  
  ${media.tablet`
  font-size: 1em;
  margin: 10px;
  `}

  `

  const FooterDiv = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #313947;
  
  
  ${media.tablet`
  justify-content: center;
  flex-direction: column;
  `}

  `
  
  export default Footer