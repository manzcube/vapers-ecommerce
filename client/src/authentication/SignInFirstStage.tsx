import { Link } from 'react-router-dom'

// Icons
import g from "../resources/img/g.png"

type LoginProps = {
    currentStage: boolean
    setCurrentStage: (stage: boolean) => void
}

const SignInFirstStage = ({ currentStage, setCurrentStage }: LoginProps) => {
    
    return (
        <div id='sign-in-dashboard'>
            <h1>Sign In</h1>
            <p>We are happy to see you back!</p>
            <div className='button-hub'>
                <button id='facebook-button'><span>f</span> Facebook</button>
                <button id='google-button'><span><img alt="G" src={g} /></span> Google</button>
                <button id='linkedin-button'><span>in</span> LinkedIn</button>
                <button id='email-button' onClick={() => setCurrentStage(!currentStage)}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    Email
                </button>
            </div>
            <p>I am not registered - <Link to="/sign-up">Sign Up</Link></p>
        </div>
    )
}

export default SignInFirstStage