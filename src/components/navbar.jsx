import React from 'react';

const Navbar = () => {
    return (
        <div className='absolute w-screen bg-[#141414] h-[75px] text-[14px] Roboto gap-8 font-medium justify-center items-center object-center text-white flex flex-row'>
            <h1 className='hover:cursor-pointer hover:line-through'>Mission</h1>
            <h1 className='hover:cursor-pointer hover:line-through'>Sponsors</h1>
            <h1 className='hover:cursor-pointer hover:line-through'>FAQs</h1>
            <h1 className='hover:cursor-pointer hover:line-through'>Home</h1>
            <h1 className='hover:cursor-pointer hover:line-through'>2024</h1>
            <h1 className='hover:cursor-pointer hover:line-through'>Past Events</h1>
            <h1 className='hover:cursor-pointer hover:line-through'>Impact</h1>
        </div>
    );
};

export default Navbar;