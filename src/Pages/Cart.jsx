import React from 'react'
import '../Components/CSS/Cart.css';
import DisplayCart from '../Components/CartItems/DisplayCart';
const Cart = () => {
  return (
    <div className='cart-content'>
      <div className='cart-items'>
        <DisplayCart/>
      </div>
    </div>
  )
}

export default Cart
