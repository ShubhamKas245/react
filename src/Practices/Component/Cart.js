import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../utils/cartSlice'
import FoodItem from './FoodItem'

const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();

    const handleClearCart=()=>{
         dispatch(clearCart())
    }

  return (
    <div>
        <button className='m-1 p-2 bg-green-100' onClick={()=>handleClearCart()}>Clear cart</button>
        <h1>Total cart items {cartItems.length}</h1>
       <div className='flex '> {  cartItems.map(item=>(<FoodItem key={item.id} {...item} /> )) }</div>
    </div>
  )
}

export default Cart