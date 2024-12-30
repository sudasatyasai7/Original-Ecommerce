import React from 'react'
import './Popular.css'
import data from '../Assets/data';
import Item from '../Items/Item';
const Popular = () => {
    return (
        <div className='popular-content'>
            <div className='popular-main'>
                <div className='popular-title'>
                    <p>POPULAR IN WOMEN</p>
                    <hr></hr>
                </div>
                <div className='popular-images'>
                    {data.map((item,i)=>{
                        return(
                            <Item key={i} id={item.id} name={item.name} image={item.image} old={item.old_price} new={item.new_price}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popular
