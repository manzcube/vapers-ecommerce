import React, { useState } from 'react'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'

type LoginProps = {
    setCurrentStage: (stage: boolean) => void
}

const SignInSecondStage = ({ setCurrentStage }: LoginProps) => {
    const [loginStage, setLoginStage] = useState(true)
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const { email, password } = formData

    // Handle Input On Change
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setformData((prevstate) => ({
            ...prevstate,
            [e.target.id]: e.target.value
        }))
    }

    // On Submit
    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("LOGGING IN", formData)
    }

    return (
        <div id='sign-in-dashboard'>
            <h1>Log In</h1>
            {loginStage ? (
                <>
                    <p>Enter your email</p>
                    <div className='credentials-hub'>
                        <EmailInput placeholder="email" id="email" onChange={onChange} value={email} />
                        <div className='credentials-buttons'>
                            <button className='credentials-button-1' onClick={() => setCurrentStage(true)}>Back</button>
                            <button className='credentials-button-2' onClick={() => setLoginStage(false)}>Continue</button>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <p>Enter your password</p>
                    <div className='credentials-hub'>
                        <PasswordInput placeholder="password" id="password" onChange={onChange} value={password} />
                        <div className='credentials-buttons'>
                            <button className='credentials-button-1' onClick={() => setLoginStage(true)}>Back</button>
                            <button className='credentials-button-2' onClick={onSubmit}>Log In</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    ) 
}

export default SignInSecondStage