import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <div className='flex justify-between py-6 px-12 text-gray-600 bg-blue-300 fixed top-0 w-full'>
            <div className='text-3xl font-large'>
                <NavLink to="/">Health Online</NavLink>
            </div>
            <div className='text-xl'>
                <NavLink to="/" exact className='mr-10 hover:text-white'>Home</NavLink>
                <NavLink to="/about" exact className='mr-10 hover:text-white'>About</NavLink>
                <NavLink to="/conditions" exact className="hover:text-white">Conditions</NavLink>
            </div>
        </div>
    )
}


export default Navbar;  