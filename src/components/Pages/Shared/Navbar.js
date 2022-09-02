import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Link } from "react-router-dom";
import auth from "../../../firebase.init";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const navItems = (
    <>
      <li className=" lg:hidden flex items-center">
        {user && (
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
        )}
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/learn"
        >
          Learn
        </NavLink>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="contact"
        >
          Contact Us
        </NavLink>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="reviews"
        >
          Reviews
        </NavLink>
      </li>
      {/* <li className="my-1 lg:mr-2 cursor-pointer hover:text-accent">
                <Link to="tutorial">Tutorial</Link>
            </li>
            <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
                <Link to="quiz">Quiz</Link>
            </li> */}
      <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="about"
        >
          About
        </NavLink>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer  hover:text-accent">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="kids"
        >
          For Kids
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li className="my-1 lg:mr-2 cursor-pointer hover:text-accent hidden lg:block">
        {user ? (
          <div className="avatar dropdown hidden lg:block">
            <div className="w-10 rounded-full">
              <label tabIndex="0" className="pointer">
                <img className="pointer" src={user.photoURL} alt="" />
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 absolute right-0"
              >
                <li>
                  <Link to="/profile">
                    <button>Profile</button>
                  </Link>
                </li>
                <li>
                  <button onClick={logout}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/login"
          >
            Login
          </NavLink>
        )}
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer hover:text-accent block lg:hidden">
        {user ? (
          <button onClick={logout}>Log Out</button>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/login"
          >
            Login
          </NavLink>
        )}
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
          <p>
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl hover:text-accent pl-8"
            >
              Language Fixer
            </Link>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal pr-8">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
