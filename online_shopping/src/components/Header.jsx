import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../style.css'
import shoppingCart from '../assets/shopping-cart.png'


const Header = () => {
  const selector = useSelector(state => state)
  const cartProducts = selector.cartProducts
  return (
    <header id='header'>
      <NavLink to='/'>
        <img className='siteLogo' src='https://img.icons8.com/bubbles/344/mac-os.png' alt='kot' />
      </NavLink>
      <form className='search'>
        <input type='text' placeholder='search' />
        <button>Accept</button>
      </form>

      <div className='cartLink'>
      <NavLink to='/cart' ><img className='shoppingCart' src={shoppingCart}  alt='' /></NavLink>
        <span>{cartProducts.length}</span>
      </div>
    </header>
  )
}

export default Header