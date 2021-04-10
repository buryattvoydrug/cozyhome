import React, { useContext, useState } from 'react'
import { GlobalState } from '../GlobalState'

import '../scss/components/Filter.scss'

function Filter() {



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
      <div className="filter-block">
        <button className="filter__button all" value='' onClick={handleCategory} >View all</button>
        {
          categories.map(category => (
                      <button
                       value={"category=" + category.name} onClick={handleCategory} key={category._id}
                       className={
                        "category=" + category.name ===  handleCategory?
                        "filter__button filter__button_active" : "filter__button"} >
                       {category.name}
                       {handleCategory}
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
