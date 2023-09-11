import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(serverResponse => {
                console.log(serverResponse.data, "✅✅✅")
                setProducts(serverResponse.data)
            })
            .catch(serverError => console.log(serverError, "❌❌❌"))
    }, [])
    return (
        <fieldset>
            <legend> <h2>AllProducts</h2></legend>
            {products.map(product => <div
                key={product._id}>
                <h3>{product.title}</h3>
                <h5>price  : {product.price}</h5>
                <h5>description  : {product.description}</h5>
            </div>)}
        </fieldset>

    )
}

export default AllProducts