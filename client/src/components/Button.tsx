import React from 'react'
import "../style/components.css"

type ButtonProps = {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='button'>{children}</button>
  )
}

export default Button