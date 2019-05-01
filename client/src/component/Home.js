import React from 'react'
import styled from 'styled-components';
import logo from '../images/turtles.jpg'
import Fade from 'react-reveal/Fade';

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
        <Fade duration={2500}>
        <MidDiv key='mid'>
          <MidText> </MidText>
          <MidText>and developing websites.</MidText>
        </MidDiv>
        </Fade>
      <BotDiv>
        <BotText>Will be pic</BotText>
        <BotText>It's nice to meet you.</BotText>
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
  color: #f7faff;
  font-size: 5em;
  font-family: 'Noto Sans TC', sans-serif;

`

const MidText = styled.h1`
  color: #ededed;
  font-size: 5em;
  margin: 25px;
  font-family: 'Noto Sans TC', sans-serif;

`
const BotText = styled.h1`
  color: #313947;
  font-size: 5em;
  margin: 0;
  font-family: 'Noto Sans TC', sans-serif;
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
  padding-left: 10%;
  align-items: center;
  justify-content: space-around;
  background: #ededed;
`

