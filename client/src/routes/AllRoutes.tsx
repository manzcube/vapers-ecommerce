import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Views
import Cart from "../containers/Cart"
import Home from "../containers/Home"
import Product from "../containers/Product"
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}

export default AllRoutes