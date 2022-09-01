import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useUsers from "../../hooks/useUsers";

const Assignments = () => {
  const [assignBody, setAssignBody] = useState("");
  const [assignEmail, setAssignEmail] = useState("");
  const [user] = useAuthState(auth);
  // const [assignEmail, setAssignBody] = useState("");
  // const [user, role] = user.
  const { admin } = useAdmin(user);
  const { role } = useUsers(user);

  const handleAssignSub = (e) => {
    e.preventDefault();
    const assignmentBody = { assignBody, assignEmail };

    fetch("http://localhost:5000/assignSub", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(assignmentBody),
    }).then(() => {
      console.log("new assignment added");
    });

    e.target.reset();
  };

  if (handleAssignSub) {
    <p>assignment Submitted</p>;
  }

  return (
    <div>
      <h1 className="mt-20 text-xl lg:text-2xl text-bold">Contents</h1>
      <div class="card bg-primary text-zinc-300 my-16">
        <div className="bg-gray-500 p-6">
          <h1 class="card-title text-2xl text-yellow-300">
            Primary Assignment
          </h1>
          <h2 class="text-bold text-xl">Make sentences with the given words</h2>
        </div>
        <div class="card-body">
          <div className="bg-gray-400 p-5 rounded">
            <p class="text-bold text-xl text-white">Doodle, Hustle</p>
          </div>
          {role !== "admin" && (
            <form onSubmit={handleAssignSub}>
              <textarea
                required
                value={assignBody}
                onChange={(e) => setAssignBody(e.target.value)}
                placeholder="type here....."
                className="p-3 rounded text-gray-400"
                name="task"
                id=""
                cols="40"
                rows="3"
              ></textarea>
              <div class="form-control">
                <label class="input-group">
                  <span className="text-zinc-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={assignEmail}
                    onChange={(e) => setAssignEmail(e.target.value)}
                    placeholder="yourmail@gmail.com"
                    class="input input-bordered"
                  />
                </label>
              </div>
              <div class="card-actions mt-3">
                <button class="mx-auto btn btn-outline btn-warning">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
