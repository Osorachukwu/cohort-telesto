import React, { useState } from 'react'
import MobileNav from './MobileNav';

export default function DesktopNav() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav>
            <ul className='relative flex justify-between px-5'>
                <li>Logo</li>
                <button className='btn md:hidden' onClick={() => setToggle(!toggle)}>
                    {
                        toggle ? <p>❌</p> : <p>🍔</p>
                    }
                </button>

                {/* Mobile menu glass morph effect*/}
                {toggle &&
                    <MobileNav />
                }

                {/* Desktop menu */}
                <ul className='hidden md:flex gap-6'>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </ul>
            </ul>
        </nav>
    )
}
