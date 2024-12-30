import React, { useContext } from 'react'
import './Display.css'
import star from '../Assets/star_icon.png';
import dull from '../Assets/star_dull_icon.png';
import { ContextData } from '../Context/Context';
const Display = (prop) => {
  const aa =useContext(ContextData)
  const item=aa.data.addItem
  return (
    <div className='display-content'>
      <div className='product-left'>
        <div className='product-small'>
          <img src={prop.product.image}></img>
          <img src={prop.product.image}></img>
          <img src={prop.product.image}></img>
          <img src={prop.product.image}></img>
        </div>
        <div className='product-large'>
        <img src={prop.product.image}></img>
        </div>
      </div>
      <div className='product-right'>
        <p id='pro-name'>{prop.product.name}</p>
        <div className='display-star'>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={star}></img>
          <img src={dull}></img>
          <p>(122)</p>
        </div>
        <div className='display-prices'>
          <p id='old'>${prop.product.old_price}</p>
          <p>${prop.product.new_price}</p>
        </div>
        <p>A Light weight,usually knitted,pull over shirt,close fitting and with a round neck.</p>
        <h3>Select Size</h3>
        <div className='display-sizes'>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <div className='display-cart' onClick={()=>item(prop.product.id)}>ADD TO CART</div>
        <p>Tags<span>Modern,Latest</span></p>
      </div>
    </div>
  )
}

export default Display
