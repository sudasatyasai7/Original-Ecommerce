import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import {Link} from 'react-router-dom'
import { ContextData } from '../Context/Context';
const Navbar = () => {
    const[menu,setMenu]=useState('shop')
    const ss=useContext(ContextData)
    const cartTotal=ss.data.cartTotal
    return (
        <div className='content'>
            <div className='nav-content'>
                <div className='nav-icon'>
                    <img src={logo} alt='not found'></img>
                    <p>SHOPPER</p>
                </div>
                <ul className='nav-links'>
                    <Link id='link' to='/'><li onClick={()=>setMenu('shop')}>SHOP{menu==='shop'?<hr></hr>:<></>}</li></Link>
                    <Link id='link' to='/men'><li onClick={()=>setMenu('men')}>MEN{menu==='men'?<hr></hr>:<></>}</li></Link>
                    <Link id='link' to='/women'><li onClick={()=>setMenu('women')}>WOMEN{menu==='women'?<hr></hr>:<></>}</li></Link>
                    <Link id='link' to='/kid'><li onClick={()=>setMenu('kid')}>KIDS{menu==='kid'?<hr></hr>:<></>}</li></Link>

                </ul>
                <div className='login-cart'>
                    <Link id='link' to='/login'><p>Login</p></Link>
                    <div className='cart-image'>
                        <Link id='link' to='/cart'><img src={cart}></img></Link>
                        <div className='cart-item'>{cartTotal}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
