import React, { useContext } from 'react'
import { GlobalState } from '../GlobalState'

import '../scss/components/Filter.scss'

function Filter() {

  const state = useContext(GlobalState)
  const [categories] = state.categoriesAPI.categories

  const [category, setCategory] = state.productsAPI.category
  const [sort, setSort] = state.productsAPI.sort
  const [search, setSearch] = state.productsAPI.search

  const handleCategory = e => {
      setCategory(e.target.value)
      setSearch('')
  }




  return (
    <div className="filter">
      <div className="filter-block">
        <button className="filter__button all" value='' onClick={handleCategory} >View all</button>
        {
          categories.map(category => (
                      <button className="filter__button"
                       value={"category=" + category.name} onClick={handleCategory} key={category._id} >
                       {category.name}</button>
                        ))
        }
        {/* <button className="filter__button">Lighting</button>
        <button className="filter__button filter__button_active">Mirror</button>
        <button className="filter__button">Vases</button>
        <button className="filter__button">Candles</button> */}
      </div>
      <div className="sort-block">
               <div className="sort__label">
                
                <span className="sort__title">Sort by: high-low price </span>
                <button></button>
                <img 
                src="images/arrow-down.svg" alt="" />
               </div>
               <div className="sort__popup">
                <ul>
                 <li className="sort__item">high-low price</li>
                 <li className="sort__item">low-high price</li>
                </ul>
               </div>
      </div>
    </div>
  )
}

export default Filter
