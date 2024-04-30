import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav id='navbar'>
            <ul>
                <li><NavLink className='link' to='/'>Home</NavLink></li>
                <li><NavLink className='link' to='/about'>About</NavLink></li>
                <li><NavLink className='link' to='contact'>Contact Us</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;