import React, { useState } from "react";

const Assignments = () => {
  const [assignBody, setAssignBody] = useState("");

  const handleAssignSub = (e) => {
    e.preventDefault();
    const assignmentBody = { assignBody };

    fetch("http://localhost:5000/assignSub", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(assignmentBody),
    }).then(() => {
      console.log("new assignment added");
    });

    e.target.reset();
  };

  return (
    <div>
      <h1 className="text-center mt-20 text-xl lg:text-2xl text-bold">
        Contents
      </h1>
      <div class="card w-200 bg-primary text-zinc-300 my-16">
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
            <div class="card-actions mt-3">
              <button class="mx-auto btn btn-outline btn-warning">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
