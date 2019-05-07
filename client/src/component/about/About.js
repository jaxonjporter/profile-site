import React, { useState, } from 'react';
import styled from 'styled-components'
import res from '../../images/JaxonPorterRes.jpg'

const About = () => {

  return(
    <MainDiv>
      <Container>
      <Resume src={res} />
      </Container>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background: #fff8f4;
  height: 100%;
  min-height: 400px;
`

const Container = styled.div`
  padding: 10%;
  padding-top: 100px;
`

const Resume = styled.img`
  width: 100%;
`


export default About