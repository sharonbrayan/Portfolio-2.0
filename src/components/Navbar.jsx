import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navElements = [
    { ele: "Home", link: "#home" },
    { ele: "About", link: "#about" },
    { ele: "Projects", link: "#projects" },
    { ele: "Contact", link: "#contact" },
]
const Navbar = () => {
    const [activeLink, setActiveLink] = useState("#home");

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const navRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();

    // Decide WHEN nav should be visible
    useEffect(() => {
        if (!navRef.current) return;

        if (currentScrollY <= 0) {
            // At very top → always show
            setIsNavVisible(true);
        } else if (currentScrollY > lastScrollY+20) {
            // Scrolling DOWN → hide
            setIsNavVisible(false);
        } else if (currentScrollY < lastScrollY) {
            // Scrolling UP → show
            setIsNavVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    // Animate the navbar with GSAP when visibility changes
    useEffect(() => {
        if (!navRef.current) return;

        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -100,   // slide up out of view
            opacity: isNavVisible ? 1 : 0,
            duration: 0.5,
        });
    }, [isNavVisible]);

    return (
        <nav
            ref={navRef}
            className="fixed-top d-flex justify-content-between align-items-center mt-5 px-4 py-2 rounded-4 nav-bar"
        >
            <div className='d-flex justify-content-around w-100'>
                {navElements.map((item) => (
                    <a
                        key={item.ele}
                        href={item.link}
                        className={`text-decoration-none nav-items ${activeLink === item.link ? "active-nav" : ""}`}
                        onClick={() => setActiveLink(item.link)}
                    >
                        {item.ele}
                    </a>
                ))}

            </div>
        </nav>
    )
}

export default Navbar