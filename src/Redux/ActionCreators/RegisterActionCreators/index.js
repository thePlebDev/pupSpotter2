import types from '../../Types'

const registerActionCreators =(()=>{

  return{
    show(){
      return{
        type:types.show
      }
    },
    showLogin(){
      return{
        type:types.showLogin
      }
    },
    showSignUp(){
      return {type:types.showSignUp}
    }
  }

})()

export default registerActionCreators
