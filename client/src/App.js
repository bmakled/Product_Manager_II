import './App.css';
import ProductForm from './components/ProductForm';
import ProductDisplay from './components/ProductDisplay';
import OneProduct from './components/OneProduct';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditOne from './components/EditOne';
function App() {
  const[allProducts, setallProducts]= useState([])

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductForm allProducts = {allProducts} setallProducts={setallProducts}/> } />
        <Route path = '/oneProduct/:id' element = {<OneProduct/>}/>
        <Route path = '/editProduct/:id' element = {<EditOne/>}/>
        <Route path = '/deleteProduct/:id' element = {<EditOne/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
