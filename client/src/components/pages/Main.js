import React, { Component, useContext } from 'react'
import ToTopButton from '../ToTopButton'
import Item from '../Item'
import Filter from '../Filter'

import '../../scss/components/pages/Main.scss'
import { GlobalState } from '../../GlobalState'


function Main() {

  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  console.log(products)

  return (
    <section className="main-page">
      <Filter/>
      <div className="items-list">
        {
          products.map(product => {
            return <Item key={product._id} product={product}/>
          })
        }

      </div>



      <ToTopButton/>
    </section>
  )
}

export default Main
