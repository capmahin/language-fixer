import React from "react";
import { NavLink } from "react-router-dom";
import americaFlag from "../../../assets/united-states.png";
import newclass from "../../../assets/newclass.svg";
import privacy from "../../../assets/privacy.svg";
import help from "../../../assets/help.svg";
// import useUsers from "../../hooks/useUsers";
// import auth from "../../../firebase.init";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useState } from "react";

const ClassroomSidebar = () => {
  // const [users] = useUsers([]);
  // const [user] = useAuthState(auth);

  // const addStudents = (sEmail) => {
  //   // console.log(sEmail);

  //   const students = { sEmail };

  //   const url = `http://localhost:5000/user/addStudent/${user.email}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(students),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       alert("Student Added to classroom successfully");
  //       console.log(data);
  //     });
  // };

  return (
    <div className="">
      <ul className="menu overflow-y-auto">
        <li>
          <div className="flex mx-auto">
            <img className="w-10 rounded-xl " src={americaFlag} alt="" />
            <p className="font-bold text-sky-600">English</p>
          </div>
        </li>
        <NavLink
          to="addstudents"
          htmlFor="my-modal-5"
          className="btn btn-outline border-0 my-2 text-base text-gray-500"
        >
          {/* <img className="mr-2" src={newclass} alt="" /> Add Students */}
          Add Students
        </NavLink>
        <NavLink
          to="students"
          className="btn btn-outline border-0 my-2 text-base text-gray-500"
        >
          {/* <img className="mr-2" src={privacy} alt="" /> */}
          STUDENTS
        </NavLink>
        <NavLink
          to="assign"
          className="btn btn-outline border-0 my-2 text-base text-gray-500"
        >
          {/* <img className="mr-2" src={help} alt="" /> */}
          Assignment
        </NavLink>
      </ul>
    </div>
  );
};

export default ClassroomSidebar;
