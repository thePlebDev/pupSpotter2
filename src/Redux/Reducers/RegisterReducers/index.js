import types from '../../Types'

const initialState ={
  show:false,
  showLogin:types.showLogin,
}

const registerReducers=(state = initialState,action)=>{
  switch (action.type) {
    case types.show:
      return{...state,show:true}

    case types.showLogin:
      return{...state,showLogin:types.showLogin}

    case types.showSignUp:
      return{...state,showLogin:types.showSignUp}

    case types.showSpot:
      return{...state,showLogin:types.showSpot}

    case types.hide:
      return{...state,show:false}

    default:
      return state

  }
}


export default registerReducers
