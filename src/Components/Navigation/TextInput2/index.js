import React,{useRef} from 'react';
import styled from 'styled-components';

import useClickDetection from '../../../Hooks/UseClickDetection'

const Input = styled.input`
  border:none;
  border-bottom: 1px solid #289672;
  outline:none;
  width:100%;
  margin: 20px auto;
  padding-left:10px;
  font-size:20px;
  color:#289672;

`
const InputContainer = styled.div`
  color:#289672;
  position:relative;
  width:90%;
  display:flex;
  justify-content:center;
  margin:0 auto;

`
const Label = styled.label`
  position:absolute;
  transition:all 0.35s;
  bottom:${({state})=>state ?'45px':'20px'};
  left:10px;
  font-size:${({state})=>state ?'13px':'16px'};
  font-weight:500;
  letter-spacing:0.5px;
`




const  TextInput2 =({name,title,type,handleChange,value})=>{
  const node = useRef();
  const {state} = useClickDetection(node,value)
  return(
    <InputContainer ref={node}>
      <Label htmlFor={name} state={state}>{title}</Label>
      <Input type={type} id={name} name={name} onChange={(e)=>handleChange(e)} value={value}/>
    </InputContainer>
  )
}

export default TextInput2
