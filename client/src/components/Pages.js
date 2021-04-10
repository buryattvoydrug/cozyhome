import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import ItemPage from './pages/ItemPage'
import CartPage from './pages/CartPage'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import { GlobalState } from '../GlobalState'
import Login from './Login'
import Register from './Register'

function Pages() {

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged


  return (
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/detail/:id" exact component={ItemPage}/>

      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route path="/register" exact component={isLogged ? NotFound : Register} />

      {/* <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
      <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
      <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

      <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
      <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} /> */}

      <Route path="/cart" exact component={CartPage}/>

      <Route path="*" exact component={NotFound}/>

    </Switch>
  )
}

export default Pages
