import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='my-4 flex space-x-4'>
        <Link to='/'> Demo </Link>

        <div className='flex items-center space-x-4'>
           <Link to='/' className='hover:underline'> Users </Link>
           <Link to='/albums' className='hover:underline'> Albums </Link>
        </div>
    </div>
  )
}

export default Navbar