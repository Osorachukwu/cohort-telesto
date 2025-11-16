import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav({toggle}: {toggle: () => void}) {
    return (
        <ul className='absolute right-0 top-16 bg-red-300 h-56 w-60 rounded-md px-3 py-3'>
            <li onClick={toggle}><Link to="/">Home</Link></li>
            <li onClick={toggle}><Link to="/about">About</Link> </li>
            <li onClick={toggle}><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
