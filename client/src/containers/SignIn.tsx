import React, { useState } from 'react'
import SignInFirstStage from '../authentication/SignInFirstStage'
import SignInSecondStage from '../authentication/SignInSecondStage'
import "../style/auth.css"


const SignIn = () => {
  const [currentStage, setCurrentStage] = useState(true)

  return (
    <div className='container'>
      {currentStage ? (
        <SignInFirstStage currentStage={currentStage} setCurrentStage={setCurrentStage} />
      ):(
        <SignInSecondStage setCurrentStage={setCurrentStage} />
      )}
    </div>  
  )
}

export default SignIn