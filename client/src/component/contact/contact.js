import React, { useState, } from 'react'
import styled from 'styled-components'
import { useFormInput, } from "../../hooks/useFormInput";
import axios from 'axios'





const Contact = () => {
  const name = useFormInput('')
  const email = useFormInput('')
  const subject = useFormInput('')
  const body = useFormInput('')


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/blogs", { name, email, subject, body, })
      .then( res => {
        debugger
      }).catch(res => {debugger})
  }

  return(
    <MainDiv>
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            label="name"
            placeholder="Name"
            name="Name"
            required
            { ...name }
          />        
          <input
            label="email"
            placeholder="Email"
            name="email"
            required
            { ...email }
          />        
          <input
            label="subject"
            placeholder="Subject"
            name="subject"
            required
            { ...subject }
          />        
          <input
            label="body"
            placeholder="Body"
            name="body"
            required
            { ...body }
          />        
          </form>
      </Container>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  background: #fff8f4;
  height: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  padding: 10%;
  padding-top: 100px;
`

export default Contact