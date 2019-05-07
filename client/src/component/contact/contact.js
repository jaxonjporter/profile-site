import React, { useState, } from 'react'
import styled from 'styled-components'
import { useFormInput, } from '../../hooks/useFormInput';
import axios from 'axios'





const Contact = () => {
  const Name = useFormInput('')
  const Email = useFormInput('')
  const Subject = useFormInput('')
  const Body = useFormInput('')


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/contacts", { name: Name.value, email: Email.value, subject: Subject.value, body: Body.value, })
      .then( res => { alert('Contact Submitted Successfully')})
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
            { ...Name }
          />        
          <input
            label="email"
            placeholder="Email"
            name="Email"
            required
            { ...Email }
          />        
          <input
            label="subject"
            placeholder="Subject"
            name="Subject"
            required
            { ...Subject }
          />        
          <input
            label="body"
            placeholder="Body"
            name="Body"
            required
            { ...Body }
          /> 
          <button>Submit</button>       
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