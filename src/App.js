import './App.css';
import React from 'react';
import Header from './components/Header'
import Home from './Pages/Home'
import Footer from './components/Footer';
import Product from './Pages/Product';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import CategoryProducts from './Pages/CategoryProducts';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/categories/:name' element={<CategoryProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<div>Page Not Found</div>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
