import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            // if scroll down hide the navbar
            setShow(false); 
        } else {
            // if scroll up show the navbar
            setShow(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${show ? 'show' : 'hide'}`}>
            <div className='absolute w-screen bg-[#141414] h-[75px] text-[14px] Roboto gap-8 font-medium justify-center items-center object-center text-white flex flex-row'>
                <h1 className='hover:cursor-pointer hover:line-through'>Mission</h1>
                <h1 className='hover:cursor-pointer hover:line-through'>Sponsors</h1>
                <h1 className='hover:cursor-pointer hover:line-through'>FAQs</h1>
                <h1 className='hover:cursor-pointer hover:line-through'>Home</h1>
                <h1 className='hover:cursor-pointer hover:line-through'>2024</h1>
                <h1 className='hover:cursor-pointer hover:line-through'>Past Events</h1>
                <h1 className='hover:cursor-pointer hover:line-through'>Impact</h1>
            </div>
        </nav>
    );
};

export default Navbar;
