import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Sales from './components/Sales';
import Main from './components/pages/Main';
import ItemPage from './components/pages/ItemPage';
import CartPage from './components/pages/CartPage';


import './scss/App.scss';


function App() {

  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
      </div>
      <div className="page-container">
        {/* <ItemPage/>
        <CartPage/> */}
        <Main/>
      </div>
      <Sales/>
      <Footer/>
    </div>
  );
} 

export default App;
