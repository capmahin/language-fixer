import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {

    const navItems = (
        <>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="/">Home</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="learn">Learn</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="contact">Contact Us</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="reviews">Reviews</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="quiz">Quiz</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="about">About</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="kids">For Kids</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="login">Login</Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-primary text-slate-300 lg:justify-evenly">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary border rounded-box w-52 "
                        >
                            {navItems}
                        </ul>
                    </div>
                    <p><Link to="/" className="btn btn-ghost normal-case text-xl hover:text-accent pl-8">
                        Language Fixer
                    </Link></p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal pr-8">{navItems}</ul>
                </div>
            </div>

        </div >
    );
};

export default NavBar;
