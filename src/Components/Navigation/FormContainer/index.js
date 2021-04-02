import React from 'react';
import styled from 'styled-components'


import Form from './Form'
import TextInput from '../TextInput'
import useFormSubmition from '../../../Hooks/UseFormSubmition'


const Container = styled.div`
  position:absolute;
  width:80vw;
  max-width:670px;
  color:white;
  background-color:white;
  height:60vh;
  z-index:999999999999999999999;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
  border-radius:4px;
  border:none;

  margin: auto auto;

`

const FormContainer = ()=>{
    const {handleSubmit,handleChange,state} = useFormSubmition()
  return(
    <Container>
        <Form title={'login'} handleSubmit={handleSubmit}>
          <TextInput title={"Username"} type={'text'} handleChange={handleChange} name={'username'} value={state.username}/>
          <TextInput title={"Password"} type={"password"} handleChange={handleChange} name={'password'} value={state.password}/>
        </Form>
    </Container>
  )
}

export default FormContainer
