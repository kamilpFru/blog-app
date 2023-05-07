import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='authorization'>
        <div className="container">

          <h1>Log in</h1>
          <form>
              <input type="text" placeholder='username'/>
              <input type="password" placeholder='password'/>
              <button>Log in</button>
              <Link className='link' to="/register">Register</Link>
          </form>
        </div>

    </div>
  )
}

export default Login