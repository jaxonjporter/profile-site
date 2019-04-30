import React from 'react'
import styled from 'styled-components';
import logo from '../images/turtles.jpg'


 const Home = () => {

  return (
    <>
      <Hero>
        <Disp>
          <Text>I like Turtles.</Text>
        </Disp>
      </Hero>
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

const Disp = styled.div`
  display: flex;
  height: 50vh;
  width: 55vw;
  justify-content: center;
  align-items: center;
`