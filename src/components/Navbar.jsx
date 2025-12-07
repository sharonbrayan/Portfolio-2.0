import React from 'react'
import './navbar.css'

const navElements = [
    { ele: "Home", link: "#home" },
    { ele: "About", link: "#about" },
    { ele: "Projects", link: "#projects" },
    { ele: "Contact", link: "#contact" },
]
const Navbar = () => {
    return (
        <nav className='fixed-top d-flex justify-content-between align-items-center border mt-2 p-3 rounded rounded-4 border-2 nav-bar'>
            <div className='d-flex justify-content-around w-100'>
                {navElements.map((item) => (
                    <a key={item.ele} href={item.link} className='text-decoration-none text-black'>{item.ele}</a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar