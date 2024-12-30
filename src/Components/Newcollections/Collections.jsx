import React from 'react'
import './Collections.css';
import collections from '../Assets/new_collections'
import Item from '../Items/Item';
const Collections = () => {
    return (
        <div className='collections-content'>
            <div className='collection-main'>
                <div className='collections-title'>
                    <p>NEW COLLECTIONS</p>
                    <hr></hr>
                </div>
                <div className='collections-image'>
                    {collections.map((item,i) => {
                        return (
                            <Item key={i} id={item.id} name={item.name} image={item.image} old={item.old_price} new={item.new_price} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Collections
