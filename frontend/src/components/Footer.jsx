import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <Link className='logoLink' to={'/'}>
             <h1>BLOG</h1>
        </Link>
        <p>about</p>
        <p>press</p>
        <p>advertise with us</p>
        <p>careers</p>
        <p>contact</p>
        
    </footer>
  )
}

export default Footer