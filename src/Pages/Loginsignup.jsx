import React from 'react'
import '../Components/CSS/Login.css';
const Loginsignup = () => {
  return (
    <div className='login-content'>
      <div className='login-data'>
        <h2>Login</h2>
        <input type='text' placeholder='Email Address'></input>
        <input type='password' placeholder='password'></input>
        <div className='login-continue'>Continue</div>
        <div className='login-create'>
          <p>Create an account?</p>
          <p id='clickhere'>Click here</p>
        </div>
        <div className='login-check'>
          <input type='checkbox'></input>
          <p>By continuing,i agree to the terms of use&privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
