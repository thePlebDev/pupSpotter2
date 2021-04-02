import { combineReducers } from 'redux'

import registerReducers from './RegisterReducers'



const rootReducer = combineReducers({
  loginPage:registerReducers
})

export default rootReducer
