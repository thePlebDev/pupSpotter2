import React,{useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border:none;
  border-bottom: 1px solid #289672;
  outline:none;
  width:100%;
  margin: 30px auto;
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
  margin-top:40px;
`
const Label = styled.label`
  position:absolute;
  transition:all 0.35s;
  bottom:${({state})=>state ?'55px':'30px'};
  left:10px;
  font-size:${({state})=>state ?'13px':'16px'};
  font-weight:500;
  letter-spacing:0.5px;
`



const TextInput = ({title,type})=>{
  const [state,setState] = useState(false);
  return(
    <InputContainer>
      <Label htmlFor="username" state={state}>{title}</Label>
      <Input type={type} id="username" name="username" onClick={()=>{setState(true)}} />
    </InputContainer>
  )
}


export default TextInput;
