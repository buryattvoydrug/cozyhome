import axios from 'axios'
import React, { useContext } from 'react'
import {isMobile} from 'react-device-detect'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState'

import '../scss/components/Header.scss'

function Header() {

  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [cart] = state.userAPI.cart

  const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }



    const loggedRouter = () =>{
        return(
                <Link to="/" onClick={logoutUser} className="navbar__button">
                  <img src="/images/exit.png" alt=""/>
                </Link>
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
        
        <input type="text" placeholder="Search by brand" className="search__input" 
       value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      <Link to="/">
          <button className="search__button">
            <img src="/images/search.svg" alt=""/>
          </button>
          </Link>
        </div>}
        <div className="navbar-buttons">
        {isMobile ?
          <button className="navbar__button">
            <img src="/images/search.svg" alt=""/>
          </button>
        : null}
        {
          isLogged? loggedRouter() :  <Link to="/login" className="navbar__button">
                      <img src="/images/user.png" alt=""/>
                    </Link>
        }
          
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
