import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(serverResponse => {
                console.log(serverResponse.data, "👹👹👹")
                setProducts(serverResponse.data)
            })
            .catch(serverError => console.log(serverError, "🐱‍🚀🐱‍🚀🐱‍🚀"))
    },[])
    
    const deleteElement = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(serverResponse => {
                console.log(serverResponse.data)
                setProducts(products.filter(product => product._id != id));
            })
            .catch(serverError => console.log(serverError))
    }

    return (
        <fieldset>
            <legend><h2>👽___All Products___👽</h2></legend>
            {products.map(product => <div key={product._id} 
            style={{backgroundColor:product.isFunny ? "cornflowerblue": "rebeccapurple"}} >
                <div>
                <Link to = {`/${product._id}`}> {product.title}</Link>
                </div>
                <div>
                <button onClick={()=>deleteElement(product._id)}>delete</button>
                </div>
            </div>
            )}
        </fieldset>
    )
}

export default AllProducts