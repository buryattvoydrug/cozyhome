import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState'

import '../scss/components/Search.scss'

export default function Search() {

  const value = useContext(GlobalState)
  const [search, setSearch] = value.productsAPI.search


  return (
    <div className="search">
        
        <input type="text" placeholder="Search by brand" className="search__input" 
       value={search} onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      <Link to="/">
          <button className="search__button">
            <img src="/images/search.svg" alt=""/>
          </button>
          </Link>
        </div>
  )
}
