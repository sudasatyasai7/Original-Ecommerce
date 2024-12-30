import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offer-content'>
      <div className='offer-main'>
        <div className='offer-left'>
            <p>Exclusive</p>
            <p>Offers For You</p>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <div className='checknow'>Check now</div>
        </div>
        <div className='offer-right'>
            <img src={exclusive}></img>
        </div>
      </div>
    </div>
  )
}

export default Offers
