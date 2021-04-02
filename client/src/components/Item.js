import React from 'react'

function Item({name,imageUrl,brand,price}) {
  return (
    <div className="item">
            <div className="item-image">
              <img src="images/items/0_image1.jpg" alt=""/>
            </div>
            <div className="item-text">
              <h3 className="item__title">Zara Home</h3>
              <h4 className="item__subtitle">DECORATED WOOD MIRROR</h4>
              <span className="price">RUB 9990</span>
              <button className="add-to-cart__button">
                <img src="images/shopping-cart.svg" alt=""/>
              </button>
            </div>
        </div>
  )
}

export default Item
