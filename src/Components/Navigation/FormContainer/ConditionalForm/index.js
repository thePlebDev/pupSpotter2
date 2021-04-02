import React from 'react'
import { connect } from 'react-redux';


import getForm from './formData.js'


const ConditionalForm =({showLogin})=>{
  return(
    <div>
    {
      getForm()[showLogin]
    }

    </div>
  )
}



const mapStateToProps =(state)=>{

  return{
    showLogin:state.loginPage.showLogin
  }
}

const ConnectedConditionalForm = connect(mapStateToProps)(ConditionalForm)
export default ConnectedConditionalForm
