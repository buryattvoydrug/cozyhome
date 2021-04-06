import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Sales from './components/Sales';
import Main from './components/pages/Main';
import ItemPage from './components/pages/ItemPage';
import CartPage from './components/pages/CartPage';


import './scss/App.scss';
import { DataProvider } from './GlobalState';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/Pages';


function App() {

  return (
    <DataProvider>
      <Router>
        <div className="wrapper">
          <div className="container">
            <Header/>
          </div>
          <div className="page-container">
            <Pages/>
          </div>
          <Sales/>
          <Footer/>
        </div>
      </Router>
    </DataProvider>
  );
} 

export default App;
