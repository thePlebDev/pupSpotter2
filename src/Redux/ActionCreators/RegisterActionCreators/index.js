import types from '../../Types'

const registerActionCreators =(()=>{

  return{
    show(){
      return{
        type:types.show
      }
    },
    hide(){
      return{
        type:types.hide
      }
    },
    showLogin(){
      return{
        type:types.showLogin
      }
    },
    showSignUp(){
      return {type:types.showSignUp}
    },
    showSpot(){
      return{type:types.showSpot}
    }
  }

})()

export default registerActionCreators
