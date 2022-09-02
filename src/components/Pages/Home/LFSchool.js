import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classroom from "../../../assets/classroom.png";
import borderWhite from "../../../assets/borderWhite.png";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { TurnedIn } from "@material-ui/icons";

const LFSchool = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const [error, setError] = useState("");

  const classRef = useRef("");
  const languageRef = useRef("");

  const handleCreateClassroom = (event) => {
    event.preventDefault();

    const classN = classRef.current.value;
    const language = languageRef.current.value;

    if (!classN) {
      setError("Please give a class name.");
      return false;
    }
    if (!language) {
      setError("Please select a language for your class.");
      return false;
    }
    setError("");

    const lfClass = {
      className: classN,
      languageName: language,
      isInstructor: true,
    };
    console.log(lfClass);
    const url = `http://localhost:5000/addClasses/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(lfClass),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/LFClassroom");
        console.log(data);
      });
  };

  const loggedInUser = users.find((u) => u.email === user?.email);

  const handleGetStarted = () => {
    !user && navigate("/login");

    if (loggedInUser.className && loggedInUser.languageName) {
      navigate("/LFClassroom");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col-reverse justify-center items-center lg:flex-row bg-gray-50 pt-20 lg:pt-36">
        <img className="w-72 mb-10" src={classroom} alt="" />
        <div className="w-96 my-16 ml-20">
          <h2 className="text-4xl text-gray-800 font-black mb-4">
            Bring Language Fixer To Your Classroom
          </h2>
          <label
            onClick={() => handleGetStarted()}
            htmlFor="my-modal-6"
            className="btn bg-blue-500 border-0 hover:bg-rose-600 font-semibold  text-white"
          >
            Get Started
          </label>
        </div>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label htmlFor="my-modal-6" className="btn btn-xs">
              X
            </label>
            <h3 className="font-bold text-2xl text-center">
              Create a classroom for your students!
            </h3>
            <form>
              <label className="text-left">Class Name:</label>
              <input
                name="class"
                type="text"
                ref={classRef}
                className={
                  "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Select Language:</label>
              <select
                className="select  select-accent w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                name="room"
                ref={languageRef}
              >
                <option value="">Select A Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
              </select>
              {error ? (
                <small className="text-red-600 text-base">{error}</small>
              ) : (
                ""
              )}
            </form>
            <div className="modal-action">
              <label
                onClick={handleCreateClassroom}
                htmlFor={error ? "" : "my-modal-6"}
                className="btn"
              >
                Create Class
              </label>
            </div>
          </div>
        </div>
      </div>
      <img className="absolute w-screen" src={borderWhite} alt="" />
    </div>
  );
};

export default LFSchool;
