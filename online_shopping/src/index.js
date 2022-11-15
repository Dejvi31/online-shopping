import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const defaultState = {
  products: [
    {
      name: 'Itachi Uchiha Statue',
      color: 'black',
      image: 'https://m.media-amazon.com/images/I/617BE2IEKlL.jpg',
      price: '35',
      inCart: 1,
      id: 1
    },
    {
      name: 'Portugaz D Ace Statue',
      color: 'black',
      image: 'https://m.media-amazon.com/images/I/71AEUIT5KHL._AC_SL1000_.jpg',
      price: '30',
      inCart: 1,
      id: 2
    },
    {
      name: 'Rorona Zoro Statue',
      color: 'black',
      image: 'https://images-na.ssl-images-amazon.com/images/I/61gc3uVOO3L._AC_UL210_SR210,210_.jpg',
      price: '30',
      inCart: 1,
      id: 3
    },
    {
      name: 'Shanks Statue',
      color: 'black',
      image: 'https://cdn.shopify.com/s/files/1/0521/2418/8872/products/hr_meho716324_500x500.jpg?v=1659759018',
      price: '35',
      inCart: 1,
      id: 4
    },
    {
      name: 'Sasuke Uchiha Statue',
      color: 'black',
      image: 'https://ae01.alicdn.com/kf/H047cf28b839e482289bb65949b2c0645a/Naruto-Shippuden-GK-Uchiha-Sasuke-Anime-Action-Figure-Model-24CM-Curse-Seal-Sasuke-Figurines-Manga-Statue.jpg',
      price: '30',
      inCart: 1,
      id: 5
    },
    {
      name: 'Naruto Headband',
      color: 'black',
      image: 'https://i.ebayimg.com/images/g/LgoAAOSwFJlg21j-/s-l500.jpg',
      price: '9',
      inCart: 1,
      id: 6
    },
    {
      name: 'Akatsuki Ring',
      color: 'black',
      image: 'http://cdn.shopify.com/s/files/1/0550/9300/2349/products/H67d5c9b6d8e5410a9c94315034ff282cM_1200x1200.jpg?v=1644495978',
      price: '6',
      inCart: 1,
      id: 7
    },
  ],
  cartProducts: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {...state,cartProducts: [...state.cartProducts, action.payload]}
    
    case 'REMOVE_FROM_CART':
      return {...state, cartProducts: state.cartProducts.filter((el) => el.id !== action.payload)}


    case 'INCREMENT_PRODUCT':
      return {
        ...state,
        cartProducts: state.cartProducts.map((item) => {
          if(item.id === action.payload.id) {
            item.inCart += action.payload.increment
          } 
          return item
        })
      }
      case 'DECREMENT_PRODUCT':
      return {
        ...state,
        cartProducts: state.cartProducts.map((item) => {
          if(item.id === action.payload.id) {
            item.inCart -= action.payload.increment
          } 
          return item
        })
      }
    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


