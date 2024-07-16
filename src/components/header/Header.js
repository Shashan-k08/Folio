import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <nav>
            <div className="logo">folio <b>.</b></div>
            <ul className="navItems">
                <li> <a href="/">Home</a></li>
                <li> <a href="/">About</a></li>
                <li> <a href="/">Skills</a></li>
                <li> <a href="/">blog</a></li>

            </ul>
            <div className="links">
                <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="/"><i className="fa-brands fa-github"></i></a>
               
            </div>
        </nav>
  )
}

export default Header