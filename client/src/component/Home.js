import React from 'react'
import styled, { css, } from 'styled-components';
import logo from '../images/turtles.jpg'
import Fade from 'react-reveal/Fade';
import Jaxon from '../images/jaxonprofesionalcropped.jpg'
import posed from 'react-pose';

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
        <MidDiv>
            <MidThree>
              <MidText>creating web apps,</MidText>
              <MidP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</MidP>
            </MidThree>
            <MidThree>
              <MidText>phone apps</MidText>
              <MidP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</MidP>

            </MidThree>
            <MidThree>
              <MidText>and design.</MidText>
              <MidP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</MidP>

            </MidThree>
        </MidDiv>
        </Fade>
      <BotDiv>
        <Bot>
          <BotImg src={Jaxon}/>
        </Bot>
        <BotRight>
          <BotText>It's nice to meet you.</BotText>
          <BotP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BotP>

        </BotRight>
      </BotDiv>
      {/* <Content /> */}
    </>
    
  )
}

export default Home 

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

const ShakeDiv = posed.h3({
  hoverable: true,
  hover: {
    applyAtEnd: { x: 0 },
    applyAtStart: { x: -2 },
    x: 0,
    transition: {
      type: "spring",
      stiffness: 1000,
      damping: 5,
      duration: 3
    }
  }
});

const MidThree = styled(ShakeDiv)`
  width: 33.33%
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  margin: 0;

  ${media.tablet`
    width: 100%;
  `}
`

const Hero = styled.div`
  width: 100%;
  contain: content;
  display: flex;  
  min-height: 100vh;
  background-image: url(${logo}) !important;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  ${media.tablet`
  background-position-x: 16%;
  justify-content: center;
  `}

`
const Text = styled.h1`
  color: #fff8f4;
  font-size: 5em;
  font-family: 'Noto Sans TC', sans-serif;

  ${media.tablet`
  font-size: 4em;
  `}

`

const BotRight = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  ${media.tablet`
    width: 100%;
    justify-content: center;
    text-align: center;
  `}
`


const MidText = styled.h1`
  color: #fff8f4;
  font-size: 2em;
  font-family: 'Noto Sans TC', sans-serif;

  ${media.tablet`
  font-size: 2em;
  margin: 10px;
  `}

`
const MidP = styled.p`
  color: #fff8f4;
  font-size: 1.2em;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 20px;

  ${media.tablet`
  font-size: 1em;
  margin: 10px;
  `}

`
const BotText = styled.h3`
  color: #313947;
  font-size: 2em;
  margin: 0;
  font-family: 'Noto Sans TC', sans-serif;
`
const BotImg = styled.img`
  margin: 0;
  border-radius: 50%;
  min-height: 300px;
  height: 75%;
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
  min-height: 80vh; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #313947;
  padding: 5% 0%;

  ${media.tablet`
  justify-content: center;
  flex-direction: column;
  `}


`




const BotDiv = styled.div`
  min-height: 90vh; 
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
  const Bot = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  justify-content: center;

  ${media.tablet`width: 100%;`}
`

const BotP = styled.p`
  color: #313947;
  font-size: 1.4em;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 20px;
  
  ${media.tablet`
  font-size: 1em;
  margin: 10px;
  `}
  `

    