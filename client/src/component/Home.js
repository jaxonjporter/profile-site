import React from 'react'
import styled, { css, } from 'styled-components';
import logo from '../images/turtles.jpg'
import Fade from 'react-reveal/Fade';
import Jaxon from '../images/jaxonprofesionalcropped.jpg'

import './Home.css'


 const Home = () => {


  

  return (
    <>
      <Hero>
        <Disp>
          <Fade top duration={2000}>
            <Text>I like turtles...</Text>
          </Fade>
        </Disp>
      </Hero>
        <Fade duration={1000}>
        <MidDiv key='mid'>
          <MidText> </MidText>
          <MidText>and developing websites.</MidText>
        </MidDiv>
        </Fade>
      <BotDiv>
        <Bot>
          <BotImg src={Jaxon}/>
        </Bot>
        <BotRight>
          <BotText>It's nice to meet you.</BotText>
        </BotRight>
      </BotDiv>
      {/* <Content /> */}
    </>
    
  )
}

export default Home 

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

const Hero = styled.div`
  width: 100%;
  contain: content;
  display: flex;  
  height: 100vh;
  background-image: url(${logo}) !important;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  ${media.tablet`
  background-position-x: 16%;
  `}

  

`
const Text = styled.h1`
  color: #fff8f4;
  font-size: 5em;
  font-family: 'Noto Sans TC', sans-serif;

`

const BotRight = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 10%;
  width: 50%;
  height: 100%;
  justify-content: flex-start;

  ${media.tablet`
    width: 100%;
    justify-content: center;
    text-align: center;
  `}
`


const MidText = styled.h1`
  color: #fff8f4;
  font-size: 5em;
  margin: 25px;
  font-family: 'Noto Sans TC', sans-serif;

`
const BotText = styled.h3`
  color: #313947;
  font-size: 3em;
  margin: 0;
  font-family: 'Noto Sans TC', sans-serif;
`
const BotImg = styled.img`
  margin: 0;
  border-radius: 50%;
  min-height: 300px;
  min-width: 300px;
`

const Disp = styled.div`
  display: flex;
  min-height: 300px;
  min-width: 300px;
  margin-left: 20px;
  height: 50vh;
  width: 55vw;
  justify-content: center;
  align-items: center;
`
const MidDiv = styled.div`
  height: 90vh; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #313947;
`




const BotDiv = styled.div`
  height: 90vh; 
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff8f4;
  padding: 10px;

  ${media.tablet`
    flex-direction: column;
    justify-content: center;
    `}
`

  // ${media.desktop`background: dodgerblue;`}
  // ${media.tablet`background: mediumseagreen;`}
  // ${media.phone`background: palevioletred;`}

  const Bot = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  justify-content: center;

  ${media.tablet`width: 100%;`}
`

    