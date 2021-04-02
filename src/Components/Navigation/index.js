import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'

import PetsIcon from '@material-ui/icons/Pets';

import Login from './Login'
import registerActionCreators from '../../Redux/ActionCreators/RegisterActionCreators'


const Container = styled.nav`
  height:72px;
  background-color:#289672;
  overflow:hidden;
  display:flex;
  justify-content:space-around;
  `


const LinksContiner = styled.ul`
  display:flex;
  font-size:18px;
  color:white;
  list-decoration:none;
  margin:0;
  justify-content:flex-end;
  align-items:center;
  height:100%;

`

const Items = styled.li`
  list-style-type:none;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 10px;
  cursor:pointer;
`

const TitleContainer = styled.div`
  display:flex;
  font-size:25px;
  color:white;
  justify-content:flex-end;
  align-items:center;
  height:100%;
`

const Title = styled.div`
  display:none;
  margin-right:10px;
  @media only screen and (min-width: 600px) {
  display:block;
}
`


const Navigation=({show,showLogin,showSignUp,showSpot})=>{


  const handleClick=()=>{
    show()
    showLogin()
  }
  const handleClickSignup =()=>{
    show()
    showSignUp()
  }
  const handleClickSpot=()=>{
    show()
    showSpot()
  }

  return(
    <Container>
    <Login/>

    <TitleContainer>
        <Title>Pup Spotter</Title>
        <PetsIcon style={{fontSize:'33px'}} />
    </TitleContainer>
      <LinksContiner>
              <Items onClick={()=>handleClick()}>Login</Items>
              <Items onClick={()=>handleClickSignup()}>Signup</Items>
              <Items onClick={()=>handleClickSpot()}>Spot</Items>
      </LinksContiner>
    </Container>
  )
}

const mapDispatchToProps={
  show:registerActionCreators.show,
  showLogin:registerActionCreators.showLogin,
  showSignUp:registerActionCreators.showSignUp,
  showSpot:registerActionCreators.showSpot,
}

const ConnectedNavigation = connect(null,mapDispatchToProps)(Navigation)

export default ConnectedNavigation
