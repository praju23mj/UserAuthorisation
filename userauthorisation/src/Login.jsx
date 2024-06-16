import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/login',{email,password})
    .then(result=>{console.log(result)
      if(result.data==='Success'){
        navigate('/home')
      }
    })
    .catch(err=>console.log(err))
  }


  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
              <strong>Email:</strong>
            </label>
            <input
            type='email'
            placeholder='Enter Email'
            name='email'
            className='form-mail'
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
          </div>
          <div>
            <label>
              <strong>Password:</strong>
            </label>
            <input
            type='password'
            placeholder='Enter Password'
            name='password'
            className='form-pass'
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
          </div>
          <button type='submit'>Login</button>
        </form>
        <p>don't have an account?</p>
          <Link to="/ ">Register</Link>
      </div>
    </div>
  )
}

export default Login;