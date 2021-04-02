import React from 'react'
import {isMobile} from "react-device-detect"
import Slider from '../Slider'
import ToTopButton from '../ToTopButton'

import '../../scss/components/pages/ItemPage.scss'

function ItemPage() {
  return (
    <section className="item-page">
      <div className="item-text-block">
        <h1 className="item__title">Zara</h1>
        <h2 className="item__subtitle">DECORATED WOOD MIRROR</h2>
        <span className="price">RUB 9990</span>
        {isMobile ? <Slider/> : null}
          <div className="item-buttons">
            <button className="add-to-cart__button">
              <img src="images/shopping-cart.svg" alt=""/>
              <span>Add to cart</span>
            </button>
          </div>
          <p className="items__info">
          Square mirror with carved decorative wood frame.
          </p>
      </div>
      {isMobile ? <ToTopButton/>:<Slider/>}
    </section>
  )
}

export default ItemPage
