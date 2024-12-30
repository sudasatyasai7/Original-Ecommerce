import React, { useContext } from 'react'
import './DisplayCart.css';
import cross from '../Assets/cart_cross_icon.png'
import { ContextData } from '../Context/Context';
const DisplayCart = () => {
    const aa = useContext(ContextData)
    const cart=aa.data.cart
    const remove=aa.data.removeItem
    const it = aa.data.all_data
    let total=0
    return (
        <div>
            <div className='cart-alignment'>
                <div className='cart-head'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr></hr>
                {it.map((e,i) => {
                    if (cart[e.id] > 0){
                        {total+=e.new_price*cart[e.id]}
                        return (
                            <div className='cart-inner' key={i}>
                                <img  src={e.image}></img>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div>{cart[e.id]}</div>
                                <p>{cart[e.id]*e.new_price}</p>
                                <img id='cross' src={cross} onClick={()=>remove(e.id)}></img>
                            </div>
                            
                        )
                    }
                    else{
                        return null
                    }
                })}

                <hr></hr>
            </div>
            <div className='cart-total'>
                <div className='cart-left'>
                    <h2>Cart Totals</h2>
                    <div className='cart-bottom'>
                        <p>Subtotal</p>
                        <p>${total}</p>
                    </div>
                    <hr></hr>
                    <div className='cart-bottom'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr></hr>
                    <div className='cart-bottom'>
                        <p>Total</p>
                        <p>${total}</p>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className='cart-right'>
                    <p>If you have a promo code ,Enter it here</p>
                    <div className='cart-subscription'>
                    <input type='text' placeholder='Promo code'></input>
                    <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayCart
