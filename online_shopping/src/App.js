import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Products />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
