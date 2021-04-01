import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from '../Home'
import Navigation from '../Navigation'


const App =()=>{
  return(
    <>
    <Navigation/>
    <Switch>
      <Route path='/' exact component={Home} />

    </Switch>
    </>
  )
}

export default App
