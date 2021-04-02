import React from 'react'
import {isMobile} from 'react-device-detect'

import '../scss/components/Header.scss'

function Header() {
  return (
    <header>
      <div className="logo">
        <div className="logo__text">cozy<br/>home</div>
        <img src="images/logo.png" alt=""/>
      </div>
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
          <button className="navbar__button">
            <img src="images/shopping-cart.svg" alt=""/>
          </button>
          <span className="summ">RUB 0</span>
        </div>
      </div>
    </header>
  )
}

export default Header
