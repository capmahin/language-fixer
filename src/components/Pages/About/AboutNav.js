import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AboutNav.css";

const AboutNav = () => {
    return (
        <div>
            <Outlet />

            <div className="text-white">
                <h1 className="text-center text-accent font-bold text-xl lg:text-3xl my-8">
                    Know more about Us
                </h1>
                <hr className="mx-0 lg:mx-80" />
                <div className="flex justify-evenly list-none my-3">
                    <NavLink
                        to="/about/mission"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Mission
                    </NavLink>
                    <li>
                        {" "}
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/about/approach"
                        >
                            Approach
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            to="/about/team"
                        >
                            Team
                        </NavLink>
                    </li>
                </div>
                <hr className="mx-0 lg:mx-80" />
            </div>
        </div>
    );
};

export default AboutNav;
