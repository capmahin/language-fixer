import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import americaFlag from "../../../assets/united-states.png";
import newclass from "../../../assets/newclass.svg";
import privacy from "../../../assets/privacy.svg";
import help from "../../../assets/help.svg";
import useUsers from "../../hooks/useUsers";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const ClassroomSidebar = () => {
  const [users] = useUsers([]);
  const [user] = useAuthState(auth);

  const addStudents = (sEmail) => {
    // console.log(sEmail);

    const students = { sEmail };

    const url = `https://young-plains-25750.herokuapp.com/user/addStudent/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(students),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Student Added to classroom successfully");
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-xl text-center pt-4 text-accent">
        <span className="font-bold">Language Fixer</span> for school
      </h2>
      <ul className="menu p-4 overflow-y-auto w-44 lg:w-80 ">
        <li>
          <div className="flex mx-auto">
            <img className="w-10 rounded-xl " src={americaFlag} alt="" />
            <p className="font-bold text-sky-600">English</p>
          </div>
        </li>
        <label
          for="my-modal-5"
          className="btn btn-outline border-0 my-2 text-base text-gray-500"
        >
          <img className="mr-2" src={newclass} alt="" /> Add Students
        </label>
        <NavLink
          to="/"
          className="btn btn-outline border-0 my-2 text-base text-gray-500"
        >
          <img className="mr-2" src={privacy} alt="" />
          Privacy Setting
        </NavLink>
        <NavLink
          to="/"
          className="btn btn-outline border-0 my-2 text-base text-gray-500"
        >
          <img className="mr-2" src={help} alt="" />
          Language Fixer
        </NavLink>

        {/* <label  class="btn modal-button">open modal</label> */}

        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="font-bold text-lg py-3">
              Let's add students to your class.
            </h3>

            <div class="overflow-x-auto">
              <table class="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {users
                    ?.filter((user) => !user.className && !user.language)
                    ?.map((u, index) => (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{u.email}</td>
                        <td>
                          {
                            <button
                              onClick={() => addStudents(u.email)}
                              className="btn bg-success my-5 border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 modal-button"
                            >
                              Add as Student
                            </button>
                          }
                        </td>
                        <td>
                          <button className="btn bg-error my-5 border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 modal-button">
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div class="modal-action">
              <label
                for="my-modal-5"
                class="btn bg-accent my-5 border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 modal-button"
              >
                Done!
              </label>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ClassroomSidebar;
