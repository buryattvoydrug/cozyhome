import React, { useContext, useEffect, useState } from 'react'
import ToTopButton from '../ToTopButton'
import Item from '../Item'
import Filter from '../Filter'

import '../../scss/components/pages/Main.scss'
import { GlobalState } from '../../GlobalState'
import LoadingBlock from '../LoadingBlock'
import axios from 'axios'
import LoadMore from '../LoadMore'


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
      <LoadMore />



      <ToTopButton/>
    </section>
  )
}

export default Main
