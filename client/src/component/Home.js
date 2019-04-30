import React from 'react'
import styled from 'styled-components';
import logo from '../images/turtles.jpg'


 const Home = () => {

  return (
    <>
    <Hero>
      <HeroImg src={logo} />
    </Hero>
    <h1>You are Home</h1>
    </>
  )
}

export default Home 

const Hero = styled.div`
  width: 100%;
  contain: content;
  
`

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
`