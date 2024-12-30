import React, { useContext } from 'react'
import '../Components/CSS/Product.css';
import Breadscrum from '../Components/Breadscrum/Breadscrum';
import { ContextData } from '../Components/Context/Context';
import { useParams } from 'react-router-dom'
import Display from '../Components/DisplayProduct/Display';
const Product = () => {
  const {id}=useParams()
  const da  = useContext(ContextData)
  const result=da.data.all_data
  const product = result.find((itm)=>(itm.id)===Number(id))
  return (
    <div className='product-content'>
      <Breadscrum product={product}/>
      <Display product={product}/>
    </div>
  )
}

export default Product
