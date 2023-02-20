import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const EditOne = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({
        Title: "",
        Price: '',
        Description: '',
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then((product) => {
                console.log(product.data);
                setProduct(product.data)
            })
            .catch((err) => {
                console.log(err);
            })
        },[])

    const handleInputChange = (e) => {
        setProduct({...product,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

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

                <button className='btn btn-primary mt-2'>Edit</button>
            </form>
        </div>

    )
}

export default EditOne;