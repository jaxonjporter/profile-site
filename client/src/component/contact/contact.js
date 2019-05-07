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
      .then( res => {
        window.location.reload()
      })
  }

  return(
    <MainDiv>
      <Container>
        <form id='test' onSubmit={handleSubmit}>
          <InputForm
            label="name"
            placeholder="Name"
            name="Name"
            required
            { ...Name }
          />        
          <InputForm
            label="email"
            placeholder="Email"
            name="Email"
            required
            { ...Email }
          />        
          <InputForm
            label="subject"
            placeholder="Subject"
            name="Subject"
            required
            { ...Subject }
          />        
          <InputBody
            label="body"
            placeholder="Body"
            name="Body"
            required
            { ...Body }
          /> 
          <ButtonGreen>Submit</ButtonGreen>       
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

const InputForm = styled.input`
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1.5rem;
  padding: 5px;
  border: 2px solid #ededed;
  color: grey;
  min-height: 40px;
  margin: 10px;

  :focus {
    box-shadow: 0 0 0 2px #23a24d;
  }
`
const InputBody = styled.textarea`
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1.5rem;
  padding: 5px;
  border: 2px solid #ededed;
  color: grey;
  min-height: 80px;
  margin: 10px;

  :focus {
    box-shadow: 0 0 0 2px #23a24d;
  }
`

const ButtonGreen = styled.button`
  margin-left: 10px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  padding: 1rem 1.8rem;
  background-color: #23a24d;
  color: white;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition-duration: 0.1s;

  :hover {
    color: white;
    background-color: #41c36c;
  }

  :active {
    box-shadow: 0 0 0 3px #41c36c;
    background-color: white;
    color: #41c36c;
  }
`;

const Container = styled.div`
  padding: 10%;
  padding-top: 100px;
`

export default Contact