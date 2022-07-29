import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <div className='flex justify-between p-12 text-gray-600 bg-blue-300'>
            <div className='text-3xl font-large'>
                <NavLink to="/">Health Online</NavLink>
            </div>
            <div className='text-xl'>
                <NavLink to="/" exact className='mr-10'>Home</NavLink>
                <NavLink to="/about" exact className='mr-10'>About</NavLink>
                <NavLink to="/conditions" exact>Conditions</NavLink>
            </div>
        </div>
    )
}


export default Navbar;  