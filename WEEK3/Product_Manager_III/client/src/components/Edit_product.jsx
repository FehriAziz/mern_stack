import React, { useState } from 'react'
import { useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


const Update = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [])



    const updateProduct= (id) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, 
        {product})
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label><br />
                    <input type="text" 
                    name="title" 
                    value={product.title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price: </label><br />
                    <input type="text" 
                    name="price"
                    value={product.price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={product.description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;