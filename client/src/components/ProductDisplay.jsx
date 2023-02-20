import React, {useEffect} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
const ProductDisplay = (props) => {
    const {allProducts, setallProducts} = props;
    
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
        < div >
            <h2>Product Collection</h2>
            {
                allProducts.map((product) =>(
                <div key = {product._id}>
                <Link to={`/oneProduct/${product._id}`}>{product.Title}</Link>
                </div>
                ))
            }

        </div >
    )
}

export default ProductDisplay;