import './App.css';
import ProductForm from './components/ProductForm';
import ProductDisplay from './components/ProductDisplay';
import OneProduct from './components/OneProduct';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const[allProducts, setallProducts]= useState([])

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductForm allProducts = {allProducts} setallProducts={setallProducts}/> } />
        <Route path = '/oneProduct/:id' element = {<OneProduct/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
