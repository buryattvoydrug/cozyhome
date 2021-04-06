import React, { Component, useContext, useEffect, useState } from 'react'
import ToTopButton from '../ToTopButton'
import Item from '../Item'
import Filter from '../Filter'

import '../../scss/components/pages/Main.scss'
import { GlobalState } from '../../GlobalState'
import LoadingBlock from '../LoadingBlock'


function Main() {

  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products

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

  return (
    <section className="main-page">
      <Filter/>
      <div className="items-list">
          {
               !loading ? products.map(product => {
            return <Item key={product._id} product={product}/>
          }):Array(12).fill(0).map((_,index)=><LoadingBlock key={index}/>)}
      </div>



      <ToTopButton/>
    </section>
  )
}

export default Main
