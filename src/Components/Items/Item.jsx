import React from 'react'
import './Item.css';
import {Link} from 'react-router-dom'
const Item = (prop) => {
  return (
    <div className='item-content' key={prop.id}>
      <Link to={`/products/${prop.id}`} ><img src={prop.image}></img></Link>
      <p>{prop.name}</p>
      <div className='item-prices'>
        <p className='old'>${prop.old}</p>
        <p>${prop.new}</p>
      </div>
    </div>
  )
}

export default Item
