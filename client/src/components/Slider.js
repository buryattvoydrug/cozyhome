import React from 'react'
import {isMobile} from "react-device-detect"

import '../scss/components/Slider.scss'

function Slider({images}) {
  return (
    <div className="item-images">
            <div className="item-slider">
              <img src={images.url} alt=""/>
              <img src="images/items/0_image2.jpg" alt=""/>
              <img src="images/items/0_image3.jpg" alt=""/>
            </div>
            {isMobile ? null:
            <div className="arrow">
              <img src="images/arrow-button.svg" alt=""/>
            </div>
            }
          </div>
  )
}


export default Slider
