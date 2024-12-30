import React from 'react'
import './Newletter.css';
const Newsletter = () => {
  return (
    <div className='letter-content'>
      <div className='letter-main'>
        <h2>Get Exclusive Offers On Your Email</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='letter-subs'>
            <input type='text' placeholder='Your Email Id'></input>
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
