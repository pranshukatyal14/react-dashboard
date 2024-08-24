import React from 'react'
import './login.css'; // Make sure to create and link this CSS file
const login = () => {
  return (
    <div className='parent-div'>
        <div className='login-container'>
            <div>
                <h1>Login</h1>
                <h3> Hi, Welcome back 👋</h3>
                <button className='google-login-button'>login with Google</button>
                <p className='or-text'>or Login with Email</p>

            </div>
            <div className='email'>
                <h6>Email</h6>
                <input type='email'id="email" placeholder="E.g. johndoe@email.com" />
                <h6>Password</h6>
                <input type="password" id="password" placeholder="Enter your password"/>
                <div className='options'>
                <div className='remember-me'>
                    <input type='checkbox' id='remember-me'/>
                    <label htmlFor='remember-me'>Remember Me</label>
                </div>
                <a href='#' className='forgot-password'>Forgot Password?</a>

                </div>
                <button className='login-button'>Login</button>

                <p className='register-text'>Not registered yet?<a href='#'>Create an account </a> </p>


            </div>

        </div>
     
    </div>
  )
}

export default login
