import React from "react";
import { Link, Outlet } from "react-router-dom";

const LFClassroom = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <label
          for="dashboard-sidebar"
          class="btn btn-square btn-ghost text-slate-300 drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <Outlet></Outlet>
      </div>

      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            {/* <ClassroomSidebar></ClassroomSidebar> */}
            <Link to="addstudents">
              {/* <img className="mr-2" src={newclass} alt="" /> Add Students */}
              Add Students
            </Link>
          </li>
          <li>
            <Link to="students">
              {/* <img className="mr-2" src={privacy} alt="" /> */}
              STUDENTS
            </Link>
          </li>
          <li>
            <Link to="assign">
              {/* <img className="mr-2" src={help} alt="" /> */}
              Assignment
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LFClassroom;
