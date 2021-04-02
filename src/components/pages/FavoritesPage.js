import React from 'react'
import ToTopButton from '../ToTopButton'

import '../../scss/components/pages/FavoritesPage.scss'

function FavoritesPage() {
  return (
    <section className="favs-page">
      <h1 className="favs-page__title">Favorites</h1>
      <div className="favs-items items-list">
        <div className="fav__item item">
            <div className="item-image">
              <img src="images/items/image1.jpg" alt=""/>
            </div>
            <div className="item-text">
              <h3 className="item__title">Nike</h3>
              <h4 className="item__subtitle">Air Zoom Pegasus 37 Eliud Kipchoge</h4>
              <span className="price">RUB 9990</span>
              <button className="remove-from-favs__button">
                <img src="images/heart.svg" alt=""/>
              </button>
            </div>
        </div>


        <div className="fav__item item">
            <div className="item-image">
              <img src="images/items/image1.jpg" alt=""/>
            </div>
            <div className="item-text">
              <h3 className="item__title">Nike</h3>
              <h4 className="item__subtitle">Air Zoom Pegasus 37 Eliud Kipchoge</h4>
              <span className="price">RUB 9990</span>
              <button className="remove-from-favs__button">
                <img src="images/heart.svg" alt=""/>
              </button>
            </div>
        </div>
        <div className="fav__item item">
            <div className="item-image">
              <img src="images/items/image1.jpg" alt=""/>
            </div>
            <div className="item-text">
              <h3 className="item__title">Nike</h3>
              <h4 className="item__subtitle">Air Zoom Pegasus 37 Eliud Kipchoge</h4>
              <span className="price">RUB 9990</span>
              <button className="remove-from-favs__button">
                <img src="images/heart.svg" alt=""/>
              </button>
            </div>
        </div>





      </div><div className="items__numbers">
        3 of 3
      </div>
      <ToTopButton/>
    </section>
  )
}

export default FavoritesPage
