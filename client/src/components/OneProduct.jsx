import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const OneProduct = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setallProducts] = useState({})
    
    useEffect (()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
        .then((res)=>{
            console.log(res.data);
            setallProducts(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
        .then((res)=>{
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h2>Title: {product.Title}</h2>
            <h3>Description: {product.Description}</h3>
            <h3>Price: {product.Price}</h3>
            <Link to={`/editProduct/${product._id}`}>Edit</Link>
            <button onClick={deleteHandler}>Delete Product</button>
        </div>
    )
}

export default OneProduct;