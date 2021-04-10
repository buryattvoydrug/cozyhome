import React, { Component, useContext, useEffect, useState } from 'react'
import ToTopButton from '../ToTopButton'
import Item from '../Item'
import Filter from '../Filter'

import '../../scss/components/pages/Main.scss'
import { GlobalState } from '../../GlobalState'
import LoadingBlock from '../LoadingBlock'
import axios from 'axios'


function Main() {

  const state = useContext(GlobalState)

  const [item,setItem] = useState([])

  useEffect(()=>{
    setLoading(true)
    const timing = setTimeout(()=>{
      setItem([products])
      setLoading(false)
    },600)
    return ()=> clearTimeout(timing)
  },[])



    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    // if(loading) return <div><Loading /></div>



  return (
    <section className="main-page">
      <Filter/>
      <div className="items-list">
          {
               !loading ? products.map(product => {
            return <Item key={product._id} product={product} isAdmin={isAdmin} 
            deleteProduct={deleteProduct} handleCheck={handleCheck}/>
          }):Array(12).fill(0).map((_,index)=><LoadingBlock key={index}/>)}
      </div>



      <ToTopButton/>
    </section>
  )
}

export default Main


{/* <div className="sort-block">
               <div className="sort__label">
                <span className="sort__title">Sort by:</span>
               </div>
                <select className="sort__popup" value={sort} onChange={e => setSort(e.target.value)} >
                 <option className="sort__item" value='sort=-price'>high-low price</option>
                 <option className="sort__item" value='sort=price'>low-high price</option>
                </select>
      </div> */}