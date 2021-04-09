import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'

import '../../scss/components/pages/CartPage.scss'

function CartPage() {


  const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if(cart.length === 0) 
        return <div className="empty-cart">
                <h1 className="empty-cart__title">There are no items in your cart.</h1>
                <img src="/images/shopping-cart.svg" alt="" className="empty-cart__image"/>
              </div> 



  return (
    <section className='cart-page'>
      <div className="cart-block">
        <h1 className="cart__title">Cart</h1>



        <div className="cart-items">
        {cart.map(product => (
          <div className="cart__item" key={product._id}>
            <div className="cart__item-image">
              <img src={product.images.url[0]} alt=""/>
            </div>
            <div className="cart__item-text">
              <h3 className="item__title">
                <Link id="btn_view" to={`detail/${product._id}`}>{product.title}</Link>
              </h3>
              <h4 className="item__subtitle">{product.content}</h4>
              
              <div className="quality">
                <strong>Quality</strong>
                  <button className="quality__button" onClick={() => decrement(product._id)}>
                    <img src="/images/minus.svg" alt=""/>
                  </button>
                  <span>{product.quantity}</span>
                  <button className="quality__button" onClick={() => increment(product._id)}>
                    <img src="/images/plus.svg" alt=""/>
                  </button>
              </div>
              <span className="price">RUB {product.price * product.quantity}</span>
              <div className="item-buttons">
                <button className="add-to-trash__button" onClick={() => removeProduct(product._id)}>
                  <img src="/images/trash.svg" alt=""/>
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>



      <div className="summary-block">
        <h2 className="summary__title">Summary</h2>
        <div className="subtotal">
          <span>Subtotal</span>
          <span className='price'>RUB {total}</span>
        </div>
        <div className="shipping">
          <span>Shipping & Handling</span>
          <span className='price'>RUB 0</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span className='price'>RUB {total}</span>
        </div>
        <button className="checkout__button">
          <img src="/images/checkout.svg" alt=""/>
          <span>Checkout</span>
        </button>
      </div>
      {/* <div className="empty-cart">
        <h1 className="empty-cart__title">There are no items in your cart.</h1>
        <img src="/images/shopping-cart.svg" alt="" className="empty-cart__image"/>
      </div> */}
    </section>
  )
}



export default CartPage
