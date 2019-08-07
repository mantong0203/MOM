import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="Nav-wrapper grey daren-3">
            
            <div className="container">
                <Link to='/' className="brand-logo">Mom</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>    
  
    )
}

export default Navbar