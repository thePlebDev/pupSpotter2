import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import FormContainer from '../FormContainer'

const Container = styled.div`
display:${({state})=>state ? 'block':'none'};
  position:absolute;
  width:100vw;
  height:100vh;

`

const SubContainer = styled.div`
  width:100%;
  height:100%;
  background-color:black;
  opacity:0.7;
`

const OpacityContainer = styled.div`
  height:100%;
  width:100%;
  position:relative;
`




const Login = ({show})=>{
  return(
    <Container state={show}>
      <OpacityContainer>
        <FormContainer/>
        <SubContainer>
        </SubContainer>
      </OpacityContainer>

    </Container>
  )
}

const mapStateToProps =(state)=>{

  return{
    show:state.loginPage.show
  }
}

const ConnectedLogin = connect(mapStateToProps)(Login)

export default ConnectedLogin
