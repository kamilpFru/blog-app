import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const categories = ['Food', 'Home', 'Style', 'Art', 'Pop Culture']

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <Link className='logoLink' to={'/'}>
                    {/* <img src="src/assets/blog.png" alt="" /> */}
                    <h1>BLOG</h1>
                </Link>
            </div>
            <div className='links'>
                       
                <Link className='link' to="/?cat=food"><h6>Food</h6></Link>
                <Link className='link' to="/?cat=home"><h6>Home</h6></Link>
                <Link className='link' to="/?cat=style"><h6>Style</h6></Link>
                <Link className='link' to="/?cat=art"><h6>Art</h6></Link>
                <Link className='link' to="/?cat=pop"><h6>Pop Culture</h6></Link>

                <span className='user'>John</span>
                <Link className='login' to={'/login'}><span>Login</span></Link>
                
                <Link className='write' to='/write'><span>Write</span></Link>
            </div>

        </div>

    </div>
  )
}

export default Navbar