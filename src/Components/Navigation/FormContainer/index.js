import React from 'react';
import styled from 'styled-components'

import ConnectedConditionalForm from './ConditionalForm'


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

const FormContainer = ({showLogin})=>{
  return(
    <Container>
        <ConnectedConditionalForm/>
    </Container>
  )
}

export default FormContainer
