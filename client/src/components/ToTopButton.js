import React from 'react'
import { animateScroll as scroll } from 'react-scroll'


import '../scss/components/ToTopButton.scss'

function ToTopButton() {
  return (
    <button className='to-top' onClick={() => scroll.scrollToTop()}>
      <img src="/images/arrow-button.svg" alt=""/>
    </button>
  )
}

export default ToTopButton
