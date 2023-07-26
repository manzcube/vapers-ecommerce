import React from 'react'
import { products }from "../data/data.js"
import { useLocation } from 'react-router-dom'
import "../style/products.css"
import ProductButton from './ProductButton.js'


const SingleProduct = () => {
    const location = useLocation()
    const ID = location.pathname.split("/")[2]
    let currentProduct = products.find(prod => prod.id === parseFloat(ID)) || products[0]

  return (
    <div>
        <div className='single-product-inner-div'>
            <div>
                <img src={currentProduct.image} alt="" />
            </div>
            <div className='single-product-text'>
                <div className='title'>
                    <p className='name'>{currentProduct.name}</p> 
                    <span className='category'>{currentProduct.category}</span>
                </div>
                <p className='description'>{currentProduct.description}</p>
                <p>{currentProduct.price}</p>
                <button id='buy-button'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct