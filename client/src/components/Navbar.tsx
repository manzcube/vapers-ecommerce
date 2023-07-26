import React from 'react'
import { Link } from 'react-router-dom'

// Style
import "../style/components.css"

const Navbar = () => {
  return (
    <div id='navbar'>
        <Link id='logo' to="/home">Malloc Vapers</Link>
        <div className='navbar-links'>
            <Link className='hover-underline-animation' to="/home">Home</Link>
            <Link className='hover-underline-animation' to="/products/example">Product</Link>
            <Link className='hover-underline-animation' to="/cart">Cart</Link>
            <Link className='hover-underline-animation' to="/contact">Contact Us</Link>
            <Link id='sign-in-button' to="/sign-in">Sign In</Link>
        </div>
    </div>
  )
}

export default Navbar