import React from 'react'
import './Footer.css'
import logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whats from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer-content'>
      <div className='footer-logo'>
        <img src={logo}></img>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-nav'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-images'>
        <img src={insta}></img>
        <img src={pin}></img>
        <img src={whats}></img>
      </div>
      <div className='footer-end'>
        <hr></hr>
        <p>Copyright @2025-All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
