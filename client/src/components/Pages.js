import React from 'react'
import { Route, Switch } from 'react-router'
import CartPage from './pages/CartPage'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

function Pages() {
  return (
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/cart" exact component={CartPage}/>


      <Route path="*" exact component={NotFound}/>

    </Switch>
  )
}

export default Pages
