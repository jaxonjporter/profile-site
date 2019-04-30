import React from 'react'
import styled from 'styled-components';
import logo from '../images/turtles.jpg'
import { CSSTransition } from 'react-transition-group'
import Fade from 'react-reveal/Fade';

import './Home.css'


 const Home = () => {

  return (
    <>
      <Hero>
        <Disp>
          <Fade top duration={2000}>
            <Text>I LIKE TURTLES...</Text>
          </Fade>
        </Disp>
      </Hero>
        <Fade duration={2500}>
        <MidDiv key='mid'>
          <MidText></MidText>
          <MidText>and coding.</MidText>
        </MidDiv>
        </Fade>
      <BotDiv>
        <BotText>and even more coding.</BotText>
      </BotDiv>
    </>
  )
}

export default Home 

const Hero = styled.div`
  width: 100%;
  contain: content;
  display: flex;  
  height: 100vh;
  background-image: url(${logo}) !important;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

`
const Text = styled.h1`
  color: white;
  font-size: 5em;
  font-family: 'Noto Sans TC', sans-serif;

`

const TransDiv = styled.span`
`
const MidText = styled.h1`
  color: #ededed;
  font-size: 5em;
`
const BotText = styled.h1`
  color: #686868;
  font-size: 5em;
`

const Disp = styled.div`
  display: flex;
  height: 50vh;
  width: 55vw;
  justify-content: center;
  align-items: center;
`
const MidDiv = styled.div`
  height: 90vh; 
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #313947;


`
const BotDiv = styled.div`
  height: 90vh; 
  display: flex;
  padding-left: 10%;
  align-items: center;
  background: #ededed;
`

