import React from 'react'

import '../../scss/components/pages/CartPage.scss'

function CartPage() {
  return (
    <section className='cart-page'>
      <div className="cart-block">
        <h1 className="cart__title">Cart</h1>



        <div className="cart-items">
          <div className="cart__item">
            <div className="cart__item-image">
              <img src="images/items/0_image1.jpg" alt=""/>
            </div>
            <div className="cart__item-text">
              <h3 className="item__title">Zara Home</h3>
              <h4 className="item__subtitle">DECORATED WOOD MIRROR DECORATED WOOD MIRROR </h4>
              
              <div className="quality">
                <strong>Quality</strong>
                  <button className="quality__button">
                    <img src="images/minus.svg" alt=""/>
                  </button>
                  <span>1</span>
                  <button className="quality__button">
                    <img src="images/plus.svg" alt=""/>
                  </button>
              </div>
              <span className="price">RUB 9990</span>
              <div className="item-buttons">
                <button className="add-to-trash__button">
                  <img src="images/trash.svg" alt=""/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="summary-block">
        <h2 className="summary__title">Summary</h2>
        <div className="subtotal">
          <span>Subtotal</span>
          <span className='price'>RUB 9 990</span>
        </div>
        <div className="shipping">
          <span>Shipping & Handling</span>
          <span className='price'>RUB 0</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span className='price'>RUB 9 990</span>
        </div>
        <button className="checkout__button">
          <img src="images/checkout.svg" alt=""/>
          <span>Checkout</span>
        </button>
      </div>
      {/* <div className="empty-cart">
        <h1 className="empty-cart__title">There are no items in your cart.</h1>
        <img src="images/shopping-cart.svg" alt="" className="empty-cart__image"/>
      </div> */}
    </section>
  )
}



export default CartPage
