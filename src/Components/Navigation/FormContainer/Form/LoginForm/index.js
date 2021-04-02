import React from 'react';

import useFormSubmition from '../../../../../Hooks/UseFormSubmition'
import Form from '../index.js'
import TextInput from '../../../TextInput'



const LoginForm =()=>{
  const {handleSubmit,handleChange,state} = useFormSubmition({username:'',password:''})
  return(
    <Form title={'Login'} handleSubmit={handleSubmit}>
          <TextInput title={"Username"} type={'text'} handleChange={handleChange} name={'username'} value={state.username}/>
          <TextInput title={"Password"} type={"password"} handleChange={handleChange} name={'password'} value={state.password}/>
    </Form>
  )
}

export default LoginForm
