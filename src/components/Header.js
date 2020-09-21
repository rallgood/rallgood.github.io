import React from 'react'
import Link from 'gatsby-link'

import './Header.css'

function Header() {
    return(
        <div className="container header margin-bottom-2">
            <Link to='/' >Rob Allgood</Link>
            <div className="nav pull-right">
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Header
