import React from 'react'
import "../style/components.css"

type InputProps = {
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    id: string
}

const Input = ({ placeholder, onChange, value, id }: InputProps) => {
  return (
    <div className='input-pack'>
      <label className='input-label' htmlFor={id}>{placeholder}</label>
      <input onChange={onChange} type="text" placeholder={placeholder} id={id} className='input' value={value} />
    </div>
  )
}

export default Input