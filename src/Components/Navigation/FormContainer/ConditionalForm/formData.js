import React from 'react';
import LoginForm from '../Form/LoginForm'
import SignupForm from '../Form/SignUpForm'
import SpotForm from '../Form/SpotForm';


const getForm =()=>({
  LOGIN:<LoginForm/>,
  SIGNUP:<SignupForm/>,
  SPOT:<SpotForm/>
})

export default getForm
