import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import remove from '../assets/remove.png'
import '../style.css'


const Cart = () => {
  const selector = useSelector(state => state)
  const dispatch = useDispatch()

  const cartProducts = selector.cartProducts

  function removeitem(id) {
    dispatch({type:'REMOVE_FROM_CART', payload: id })
  }

  function incrementProduct(id) {
    dispatch({type:'INCREMENT_PRODUCT',payload: {id, increment: 1}})
  }
  function decrementProduct(id,inCart) {
     inCart <= 1 ? removeitem(id) : dispatch({type:'DECREMENT_PRODUCT',payload: {id,increment: 1}})
  }
  
  return (
    <div className='cart'>
      {cartProducts.length > 0 ? cartProducts.map(item => 
         <div className='cartItem'>
          <div className='cartItemImg'>
            <img src={item.image} alt='' width='200px' height='200px'/>
          </div>
          <div className='cartItemInfo'>
            <h3>{item.name}</h3>
            <span>Color: {item.color}</span>
          </div>
          <div className='cartItemQuantity'>
            <button onClick={() => incrementProduct(item.id)}>+</button>
            <span>{item.inCart}</span>
            <button onClick={() => decrementProduct(item.id,item.inCart)}>-</button>
          </div>
          <div className='cartItemPrice'>
            <h3>{item.price}$</h3>
            <span>Total: {item.price * item.inCart}$</span>
          </div>
          <div className='removeCartItem'>
            <button onClick={() => removeitem(item.id)}><img src={remove} alt='' /></button>
          </div>
         </div>
      ): <h2>Cart Is Empty</h2>}
    </div>
  )
}

export default Cart