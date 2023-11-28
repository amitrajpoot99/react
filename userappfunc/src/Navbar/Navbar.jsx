import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link className='nav-link' style={{color:'white'}} to="/home"> LOGO  </Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link className='nav-link' to='/home'>Home</Link></li>
                <li><Link className='nav-link' to='/contact'>Contact</Link></li>
                <li><Link className='nav-link' to='/about'>About</Link></li>
                <li><Link className='nav-link' to='/user'>User</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar