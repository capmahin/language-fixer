import React from "react";
import { Outlet } from "react-router-dom";
import ClassroomNavBar from "./ClassroomNavBar";
import ClassroomSidebar from "./ClassroomSidebar";

const LFClassroom = () => {
  return (
    <div className="bg-gray-200">
      <div>
        <div className="flex">
          <div className="drawer-side bg-gray-200 w-1/4 h-screen rounded-2xl">
            <ClassroomSidebar></ClassroomSidebar>
          </div>
          <div>
            <div class="navbar bg-gray-200 rounded-lg">
              <ClassroomNavBar></ClassroomNavBar>
            </div>
          </div>
          {/* <Assignments /> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LFClassroom;
