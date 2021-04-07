import React, { useContext, useEffect, useState } from 'react'
import {isMobile} from "react-device-detect"
import Carousel from '../Carousel'
import ToTopButton from '../ToTopButton'

import '../../scss/components/pages/ItemPage.scss'
import { GlobalState } from '../../GlobalState'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import LoadingItemPage from '../LoadingItemPage'

function ItemPage({product}) {
  const params=useParams()
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  const [detailProduct,setDetailProduct] = useState([])

  const [item,setItem] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const timing = setTimeout(()=>{
      setItem([products])
      setLoading(false)
    },600)
    return ()=> clearTimeout(timing)
  },[])

  useEffect(()=>{
    if (params){
      products.forEach(product => {
        if(product._id === params.id)
        setDetailProduct(product)
      });
    }
  },[params,products])

  if(detailProduct.length === 0) return null

  return (
    <section className="item-page">
    {
               !loading ? 
             <>
              <div className="item-text-block">
                <h1 className="item__title">{detailProduct.title}</h1>
                <h2 className="item__subtitle">{detailProduct.content}</h2>
                <span className="price">RUB {detailProduct.price}</span>
                {isMobile ? <Carousel images={detailProduct.images} /> : null}
                  <div className="item-buttons">
                    <Link id="btn_buy" to="#!" className="add-to-cart__button">
                      <img src="/images/shopping-cart.svg" alt=""/>
                      <span>Add to cart</span>
                    </Link>
                  </div>
                  <p className="items__info">
                  {detailProduct.description}
                  </p>
              </div>
              {isMobile ? <ToTopButton/>:<Carousel images={detailProduct.images}/>}
            </>
            
          :<LoadingItemPage/>}
    </section>
      
          
  )
}

export default ItemPage
