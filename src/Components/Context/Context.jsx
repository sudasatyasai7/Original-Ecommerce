import React, { createContext, useState } from 'react';
import all_data from '../Assets/all_product'
export const ContextData=createContext(null)
const Cart=()=>{
    const cartItem={}
    for(let i=0;i<=all_data.length+1;i++){
        cartItem[i]=0
    }
    return cartItem
}
let cartTotal=0
const ContextProvider=(prop)=>{
    const[cart,setCart]=useState(Cart())
    const addItem=(itemId)=>{
        cartTotal+=1
        setCart((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cart)
    }
    const removeItem=(itemId)=>{
        cartTotal-=1
        setCart((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        console.log(cart)
    }
    const data={all_data,addItem,cart,removeItem,cartTotal}
    
    return(
        <ContextData.Provider value={{data}}>
            {prop.children}
        </ContextData.Provider>
    )
}
export default ContextProvider