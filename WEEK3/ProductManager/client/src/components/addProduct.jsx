import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = (props) => {
    const [product, setProduct] = useState({ title: "", price: 1 , description: "" })
    const fromHandler = (e) => {
        e.preventDefault()
        console.log("SUBMITTED PRODUCT : ", product);
        axios.post("http://localhost:8000/api/products", product)
            .then(serverResponse => console.log(serverResponse))
            .catch(serverError => console.log(serverError))
        setProduct({title: "", price: 1 , description: "" })
    }
    return (
        <fieldset>
            <legend> <h2>AddProduct</h2></legend>
            <h4>
                Product FROM STATE {JSON.stringify(product)}
            </h4>
            <form onSubmit={fromHandler}>
                <p>title  : <input type="text"
                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                    value={product.title}
                /></p>
                <p>price : <input type="number"
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    value={product.price}
                /></p>
                <p>description  : <input type="text"
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    value={product.description}
                /></p>
                
                <button>Submit</button>
            </form>
        </fieldset>

    )
}

export default AddProduct