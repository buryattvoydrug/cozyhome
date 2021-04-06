import React from 'react'
import { Link } from 'react-router-dom'

function Item({product}) {
  return (
    <div className="item">
            <div className="item-image">
              <img src={product.images.url} alt=""/>
            </div>
            <div className="item-text">
              <h3 className="item__title"><Link id="btn_view" to={`detail/${product._id}`}>{product.title}</Link></h3>
              <h4 className="item__subtitle">{product.content}</h4>
              <span className="price">RUB {product.price}</span>
              <Link id="btn_buy" to="#!" className="add-to-cart__button">
                <img src="images/shopping-cart.svg" alt=""/>
              </Link>
            </div>
        </div>
  )
}

export default Item
