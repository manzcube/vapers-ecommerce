import React, { useState } from 'react'
import Input from '../components/Input'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirm_password: ""
    })
    const { name, email, password, confirm_password } = formData

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevstate => ({
            ...prevstate,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("reguster")
    }

  return (
    <>
        <p id='close-cross'>
            <Link id='credentials-butto' to="/sign-in">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </Link>
        </p>
        <div id='register-dashboard'>
            <h1>Sign Up</h1>
            <p>Create a new account</p>
            <div className='register-fields'>
                <Input placeholder="name" id="name" onChange={onChange} value={name} />
                <EmailInput placeholder="email" id="email" onChange={onChange} value={email} />
                <PasswordInput placeholder="passsword" id="password" onChange={onChange} value={password} />
                <PasswordInput placeholder="confirm_password" id="confirm password" onChange={onChange} value={confirm_password} />
                <div className='register-button'>
                    <button className='credentials-button-2' onClick={onSubmit}>Register</button>
                </div>
            </div>
        </div>    
    </>
  )
}

export default SignUpForm