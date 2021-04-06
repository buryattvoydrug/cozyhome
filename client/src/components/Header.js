import React, { useContext } from 'react'
import {isMobile} from 'react-device-detect'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState'

import '../scss/components/Header.scss'

function Header() {

  const value = useContext(GlobalState)

  return (
    <header>
      <Link to="/" className="logo">
        <div className="logo__text">cozy<br/>home</div>
        <img src="images/logo.png" alt=""/>
      </Link>
      <div className="navbar">
        {isMobile ? null: 
        <div className="search">
          <input type="text" placeholder="Search something" className="search__input"/>
          <button className="search__button">
            <img src="images/search.svg" alt=""/>
          </button>
        </div>}
        <div className="navbar-buttons">
        {isMobile ?
          <button className="navbar__button">
            <img src="images/search.svg" alt=""/>
          </button>
        : null}
          <Link to="/login" className="navbar__button">
            <img src="images/user.png" alt=""/>
          </Link>
          <Link to="/cart" className="navbar__button">
            <img src="images/shopping-cart.svg" alt=""/>
          </Link>
          <span className="summ">RUB 0</span>
        </div>
      </div>
    </header>
  )
}

export default Header
