import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
      <div className='authorization'>
        <div className="container">
            <h1>Create an account</h1>
            <form>
                <input required type="text" placeholder='username'/>
                <input required type="email" placeholder='email'/>
                <input required type="password" placeholder='password'/>
                <button>Register</button>
                <Link className='link' to="/login">Login</Link>
            </form>
          </div>
      </div>
  )
}

export default Register