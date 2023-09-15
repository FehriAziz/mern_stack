import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='border-bottom pb-3 border-2 border-dark mb-3 '>
            <h1> Notes !🗒️</h1>
            
            <div className="d-flex justify-content-around" >
                <Link className='h2' > Home </Link>
                <Link className='h2'> Create </Link>
            </div>
        </div>
    )
}

export default Nav