import React from 'react';
import { products } from '../data/data.js';
import Card from '../products/Card';
import fresin from "../resources/img/fresin.jpeg"
import "../style/index.css"

const Home = () => {
  const handleBuyNowClick = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='container' id='Home'>
      <div>
        <img src={fresin} id='home-image' alt="" />
      </div>
      <button onClick={handleBuyNowClick} id='home-button'>Buy Now</button>

      <p id='products' className='products-title'>
        OUR PRODUCTS
      </p>
      <div className='products'>
        {products.map((each) => (
          <Card key={each.id} info={each} />
        ))}
      </div>
    </div>
  );
};

export default Home;
