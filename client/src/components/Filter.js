import React, { useContext, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { GlobalState } from '../GlobalState'

import '../scss/components/Filter.scss'
import Search from './Search'

function Filter() {

  const [activeCategory, setActiveCategory] = useState('')

  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
      setActive(!isActive);
    };

  const state = useContext(GlobalState)
  const [categories] = state.categoriesAPI.categories

  const [category, setCategory] = state.productsAPI.category
  const [sort, setSort] = state.productsAPI.sort
  const [search, setSearch] = state.productsAPI.search


  const handleCategory = (e) =>  {
    setCategory(e.target.value)
    setSearch('')
  }



  return (
    <div className="filter">
      {isMobile? <Search/> : null}
      <div className="filter-block">
        <button className="filter__button all" value='' onClick={(e) => {setActiveCategory(''); handleCategory(e);}} >View all</button>
        {
          categories.map(category => (
                      <button
                       value={"category=" + category.name} onClick={(e) => {setActiveCategory(e.target.value); handleCategory(e);}}  key={category._id}
                       className={
                        "category=" + category.name ===  activeCategory ?
                        "filter__button filter__button_active" : "filter__button"} >
                       {category.name}
                       </button>
                        ))
        }

      </div>
      
      <div className="sort-block">
      <form value={sort} onChange={e => setSort(e.target.value)}>

               <div className="sort__label" onClick={toggleClass}>
                
                <span className="sort__title">Sort by: 
                {
                  sort==="sort=price" ? "low-high price" : "  "
                }
                {
                  sort==="sort=-price" ? "high-low price" : "  "
                }
                </span>
                <img 
                src="images/arrow-down.svg" alt="" />
               </div>
               <div className={isActive? "sort__popup sort__popup_active" :"sort__popup"} >
                 <input  id="-price" type="checkbox" value='sort=-price'  /><label onClick={toggleClass} className="sort__item" htmlFor="-price">high-low price</label>
                 <input  id="price" type="checkbox" value='sort=price'/><label onClick={toggleClass} className="sort__item" htmlFor="price">low-high price</label>
                
               </div>

      </form>
      </div>

    </div>
  )
}

export default Filter
