import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const ProductForm = (props) => {
    const {allProducts, setallProducts} = props
    const [product, setProduct] = useState({
        Title: "",
        Price: '',
        Description: '',
    })
    
    const handleInputChange = (e) => {
        setProduct({...product,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/postProduct`, product)
            .then((res) => {
                setallProducts([...allProducts, res.data])
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((allProducts) => {
                console.log(allProducts.data);
                setallProducts(allProducts.data)
            })
            .catch((err) => {
                console.log(err);
            })
        })
    return (
        <div className='d-flex justify-content-center mt-5'>
            <form className='w-25' onSubmit={submitHandler}>
                <h3>Product</h3>
                <label className='form-label'>Title:</label>
                <input className='form-control' type="text" onChange={handleInputChange} value ={product.Title} name='Title' />

                <label className='form-label'>Price:</label>
                <input className='form-control' type="text"  onChange={handleInputChange} value ={product.Price} name='Price' />

                <label className='form-label'>Description:</label>
                <input className='form-control'type="text"  onChange={handleInputChange} value ={product.Description} name='Description'/>

                <button className='btn btn-primary mt-2'>Create</button>
            </form>
            <div  className=''>
            <h2>Product Collection</h2>
            {
                allProducts.map((product) =>(
                <div key = {product._id}>
                <Link to={`/oneProduct/${product._id}`}>{product.Title}</Link>
                </div>
                ))
            }
            </div>
        </div>

    )
}

export default ProductForm;