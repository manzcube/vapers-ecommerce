import React from 'react'
import "../style/products.css"
import vaper_pic from "../resources/img/vaper_pic.png"
import  vaper2 from "../resources/img/vape2.png"
import ProductButton from './ProductButton'

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

type CardProps = {
    info: Product;
}

const Card = ({ info }: CardProps) => {
  return (
    <div className='card'>
        <img src={info.image} alt="pic" />
        <div className='card-text'>
            <div className='title'>
                <div>{info.name}</div>
                <div className='category'>{info.category}</div>
            </div>
            <p className='description'>{info.description}</p>    
        </div>
        
        <div className='card-bottom-section'>
            <p className='price'>{info.price}€</p>
            <ProductButton id={info.id} >More</ProductButton>
        </div>
    </div>
  )
}

export default Card