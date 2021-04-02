import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';

import registerActionCreators from '../../../../Redux/ActionCreators/RegisterActionCreators'

const FormContainer = styled.form`

  width:90%;
  margin:0 auto;
  display:flex;
  justify-content:center;
  flex-direction:column;
`

const Button = styled.button`
    width:100px;
    padding:5px 20px;
    color:#289672;
    background-color:white;
    border:1px solid #289672;
    display:block;
    font-size:16px;
    margin:0 auto;
    border-radius:4px;
`
const IconContainer = styled.div`
    position:absolute;
    top:5px;
    right:5px;
    cursor:pointer;
`

const Title = styled.div`
  color:#289672;
  text-align:center;
  padding-top:5px;
  font-size:20px;
`


const Form =({title,children,handleChange,handleSubmit,hide})=>{

  return(
    <FormContainer autocomplete="off" onSubmit={(e)=>handleSubmit(e)}>
      <IconContainer onClick={()=>hide()}>
        <CloseIcon style={{color:'#289672',fontSize:'30px'}}/>
      </IconContainer>
      <Title>{title}</Title>
        {children}
      <Button type="submit">{title}</Button>
    </FormContainer>
  )
}

const mapDispatchToProps ={
  hide:registerActionCreators.hide
}

const ConnectedForm = connect(null,mapDispatchToProps)(Form)

export default ConnectedForm
