import { Menu, X } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav';

export default function DesktopNav() {
    const [toggleNav, setToggleNav] = React.useState(false);

    function handleToggle() {
        setToggleNav(!toggleNav)
    }

    return (
        <nav className='bg-gray-300 shadow-md'>
            <ul className='flex justify-between items-center px-8 py-5'>
                <li><Link to="/">Logo</Link> </li>
                <div className='hidden md:flex items-center gap-10'>
                    <ul className='flex items-center gap-10'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <li><button className='p-2 bg-blue-300 rounded-md'>Login</button></li>
                </div>
                <button className='md:hidden' onClick={handleToggle}>
                    {toggleNav ? <X /> : <Menu />}
                </button>
                {toggleNav && <MobileNav toggle={handleToggle} />}
            </ul>
        </nav>
    )
}
