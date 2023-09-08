import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Product from './pages/product';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Product />
    <Footer/>
  </div>
);