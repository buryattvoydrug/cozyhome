import React from 'react'

import '../scss/components/Filter.scss'

function Filter() {
  return (
    <div className="filter">
      <div className="filter-block">
        <button className="filter__button all">View all</button>
        <button className="filter__button">Lighting</button>
        <button className="filter__button filter__button_active">Mirror</button>
        <button className="filter__button">Vases</button>
        <button className="filter__button">Candles</button>
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
