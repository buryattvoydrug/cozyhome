import React, { Component } from 'react'
import ToTopButton from '../ToTopButton'
import Item from '../Item'
import Filter from '../Filter'

import '../../scss/components/pages/Main.scss'

export class Main extends Component {
  render() {
    return (
      <section className="main-page">
      <Filter/>
      <div className="items-list">

        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>

      </div>



      <ToTopButton/>
    </section>
    )
  }
}

export default Main