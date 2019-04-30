import React from 'react'
import styled from 'styled-components';
import logo from '../images/turtles.jpg'


 const Home = () => {

  return (
    <>
      <Hero>
        <Disp>
          <Text>I like Turtles...</Text>
        </Disp>
      </Hero>
      <MidDiv>
        <MidText></MidText>
        <MidText>and coding.</MidText>
      </MidDiv>
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
  background: #686868;
`
const BotDiv = styled.div`
  height: 90vh; 
  display: flex;
  padding-left: 10%;
  align-items: center;
  background: #ededed;
`