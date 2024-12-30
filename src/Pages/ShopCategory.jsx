import React, { useContext } from 'react'
import '../Components/CSS/ShoppingCategory.css';
import { ContextData } from '../Components/Context/Context';
import drop from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';
const ShopCategory = (prop) => {
  const dataa = useContext(ContextData)
  const value=dataa.data.all_data
  return (
    <div className='shopping-category'>
      <div className='banner'>
        <img src={prop.banner}></img>
      </div>
      <div className='sort'>
        <p>Showing 1 - 12 <span>Out of 54 Products</span></p>
        <div className='men-sort'>
          <p>Sort by</p>
          <img src={drop}></img>
        </div>
      </div>
      <div className='shop-category-types'>
        {value.map((item,i)=>{
          if(item.category===prop.category){
            return(
              <Item key={i} id={item.id} name={item.name} image={item.image} old={item.old_price} new={item.new_price} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
