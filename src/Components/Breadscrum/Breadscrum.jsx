import React from 'react'
import './Breadscrum.css'
import bread from  '../Assets/breadcrum_arrow.png'
const Breadscrum = (prop) => {
  return (
    <div className='bread-content'>
      <div className='bread-data'>
        <p>HOME</p>
        <img src={bread}></img>
        <p>SHOP</p>
        <img src={bread}></img>
        <p>{prop.product.category}</p>
        <img src={bread}></img>
        <p>{prop.product.name}</p>
      </div>
    </div>
  )
}

export default Breadscrum
