import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

type ButtonProps = {
    children: React.ReactNode;
    id: number
  }

const ProductButton = ({ children, id }: ButtonProps) => {
  const navigate = useNavigate()

  const nav = (to: number) => {
    navigate(`/products/${to}`)
    window.scrollTo(0, 0)
  }
  return (
    <button onClick={() => nav(id)} className="product-button">{children}</button>
  )
}

export default ProductButton