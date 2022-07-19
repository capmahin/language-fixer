import React from 'react';

const NavBar = () => {


    const navItems = <>
        <li className='my-1 lg:mr-2 cursor-pointer'>Home</li>
        <li className='my-1 lg:mr-2 cursor-pointer'>About</li>
        <li className='my-1 lg:mr-2 cursor-pointer'>My Profile</li>
        <li className='my-1 lg:mr-2 cursor-pointer'>Contact Us</li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 lg:justify-evenly">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Language Fixer</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;