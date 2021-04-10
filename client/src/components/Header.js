import axios from 'axios'
import React, { useContext, useState } from 'react'
import {isMobile} from 'react-device-detect'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState'

import '../scss/components/Header.scss'

function Header() {

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin
  const [cart] = state.userAPI.cart
  const [menu, setMenu] = useState(false)

  const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }
    

  const value = useContext(GlobalState)
  const [search, setSearch] = value.productsAPI.search

  return (
    <header>
      <Link to="/" className="logo">
        <div className="logo__text">cozy<br/>home</div>
        <img src="/images/logo.png" alt=""/>
      </Link>
      <div className="navbar">
        {isMobile ? null: 
        <div className="search">
        <input type="text" placeholder="Search something" className="search__input"
       value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
    />
          <button className="search__button">
            <img src="/images/search.svg" alt=""/>
          </button>
        </div>}
        <div className="navbar-buttons">
        {isMobile ?
          <button className="navbar__button">
            <img src="/images/search.svg" alt=""/>
          </button>
        : null}
          <Link to="/login" className="navbar__button">
            <img src="/images/user.png" alt=""/>
          </Link>
          <Link to="/cart" className="navbar__button">
            <img src="/images/shopping-cart.svg" alt=""/>
          </Link>
          <span className="summ">{cart.length}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
