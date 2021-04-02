import types from '../../Types'

const initialState ={
  show:false,
  showLogin:false,
  showSignUp:false
}

const registerReducers=(state = initialState,action)=>{
  switch (action.type) {
    case types.show:
      return{...state,show:true}

    case types.showLogin:
      return{...state,showLogin:true}

    case types.showSignUp:
      return{...state,showSignUp:true}

    default:
      return state

  }
}


export default registerReducers
