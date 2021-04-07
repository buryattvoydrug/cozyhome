import React from 'react'
import {isMobile} from "react-device-detect"
import Slider from 'infinite-react-carousel';

import '../scss/components/Slider.scss'

function Carousel({images}) {

  const settings =  {
    accessibility: false,
    autoplay: true,
    centerMode: false,
    centerPadding: 0,
    initialSlide: 0,
    overScan: 1,
    shift: 10,
    slidesToShow: 2
  };
  const settingsMobile =  {
    accessibility: false,
    autoplay: false,
    arrows: false,
    centerMode: false,
    centerPadding: 0,
    initialSlide: 0,
    overScan: 1,
    shift: 20,
    slidesToShow: 1
  };

  return (
    <>
    {
      !isMobile ?
            <Slider className="item-images" {...settings}>
              <img className="item-slider" src={images.url[0]} alt=""/>
              <img className="item-slider" src={images.url[1]} alt=""/>
              <img className="item-slider" src={images.url[2]} alt=""/>
            </Slider>
      :
      <Slider className="item-images" {...settingsMobile}>
        <img className="item-slider" src={images.url[0]} alt=""/>
        <img className="item-slider" src={images.url[1]} alt=""/>
        <img className="item-slider" src={images.url[2]} alt=""/>
      </Slider>

    }
            
  </>      
  )
}


export default Carousel
