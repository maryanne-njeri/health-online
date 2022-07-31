// import React from 'react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState('');

    function handleToggle() {
        setToggleMenu(!toggleMenu);
    }


    return (
        <div className='flex justify-between py-4 px-4 lg:px-12 text-gray-600 bg-blue-300 fixed top-0 w-full'>
            <div className='text-2xl font-large'>
                <NavLink to="/">Health Online</NavLink>
            </div>
            <div className='hidden lg:block text-lg'>
                <NavLink to="/" exact className='mr-10 hover:text-white'>Home</NavLink>
                <NavLink to="/about" exact className='mr-10 hover:text-white'>About</NavLink>
                <NavLink to="/conditions" exact className="hover:text-white">Conditions</NavLink>
            </div>
            <div className='block lg:hidden text-lg'>
                <button onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className={toggleMenu ? "block" : "hidden"}>
                    <div className='text-lg flex flex-col absolute left-0 top-16 px-4 bg-blue-300 w-full space-y-4 pb-6'>
                        <NavLink to="/" exact className='mr-10 hover:text-white'>Home</NavLink>
                        <NavLink to="/about" exact className='mr-10 hover:text-white'>About</NavLink>
                        <NavLink to="/conditions" exact className="hover:text-white">Conditions</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;  