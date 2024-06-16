import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/register',{name,email,password})
    .then(result=>{console.log(result)
      navigate('/login')
    })
    .catch(err=>console.log(err))
  }
  

  return (
    <div className='container'>
      <div className='form'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <strong>Name:</strong>
            </label>
            <input
            type="text"
            placeholder='Enter Name'
            className='form-name'
            name='name'
            onChange={(e)=>setName(e.target.value)}
            required
            />
          </div>
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
          <button type='submit'>Register</button>
          </form>
          <p>Already have an account?</p>
          <Link to="/login">Login </Link>
      </div>
    </div> 
  )
}

export default Register;