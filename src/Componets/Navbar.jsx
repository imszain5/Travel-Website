import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className='header'>
       <nav className='navbar'>
           <div className="container">
                <h1 className='logo lg-heading text-light'>WT</h1>
                <ul className='nav-items'>
                   <li className="nav-item"><Link to="/">Home</Link></li>
                   <li className="nav-item"><Link to="/about">About</Link></li>
                   <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
           </div>
       </nav>
    </header>
    </>
  )
}

export default Navbar
