import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
const NavBar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const navItems = (
    <>
      <li className="my-1 lg:mr-2 cursor-pointer">
        <Link to="/">Home</Link>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer">
        <Link to="learn">Learn</Link>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer">
        <Link to="about">About</Link>
      </li>

      <li className="my-1 lg:mr-2 cursor-pointer">
        <Link to="contact">Contact Us</Link>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer">
        <Link to="reviews">Reviews</Link>
      </li>
      <li className="my-1 lg:mr-2 cursor-pointer">
        {user ? (
          <button className="btn btn-ghost" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="navbar lg:justify-evenly">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to='/'>Language Fixer</Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
