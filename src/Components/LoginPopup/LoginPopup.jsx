import React, { useState } from 'react'
import './LoginPopup.css'


const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentstate] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <p onClick={() => setShowLogin(false)}> <span><i class="fa-solid fa-xmark"></i></span></p>
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' />}

                    <input type="email" placeholder='Your email' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>{currentState === "Sing Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Be continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === "Login" ? <p>Create a new account? <span className='click' onClick={() => setCurrentstate("Sign Up")}>Click hear</span></p>
                    : <p>Already have an account? <span className='click' onClick={() => setCurrentstate("Login")}>Login here</span></p>}

            </form>
        </div>
    )
}

export default LoginPopup