import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Products = () => {
  const selector = useSelector(state => state)
  const dispatch = useDispatch()

  const products = selector.products
  console.log(products)
  const cartProducts = selector.cartProducts

  function addToCart(id) {
    let isIncart = false 
    cartProducts.forEach(el => {
      if(id === el.id) isIncart = true
    })

    if(!isIncart) {
      dispatch({type: 'ADD_TO_CART', payload: products.find((product) => id === product.id)})
    }
  }

  return (
   
    <div className='productsList'>
      {products.map(item => 
        <div className='product' key={item.id}>
          <img src={item.image} alt='' width='200px' height='200px'/>
          <h3>{item.name}</h3>
          <span>Color: {item.color}</span>

      <div className='priceBlock'>
        <span className='productPrice'>{item.price}$</span>
        <button onClick={() => addToCart(item.id)}>BUY</button>
      </div>    
        </div>
        )}
    </div>
  )
}

export default Products