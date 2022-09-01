import React, { useState } from "react";

const Assign = () => {
  const [assignBody, setAssignBody] = useState("");
  //   const [assignEmail, setAssignEmail] = useState("");

  const handleAssignSub = (e) => {
    e.preventDefault();
    const assignmentBody = { assignBody };
    setAssignBody(e.target.value);

    fetch("http://localhost:5000/assign", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(assignmentBody),
    }).then(() => {
      console.log("new assignment added");
    });

    e.target.reset();
  };
  console.log(assignBody);

  return (
    <div className="mt-20">
      <h1>Assignment: {assignBody.length}</h1>

      {assignBody.length > 0 ? (
        <h3>assignment is not done here</h3>
      ) : (
        <form
          className="bg-gray-300 p-6 m-12 rounded"
          onSubmit={handleAssignSub}
        >
          <textarea
            required
            value={assignBody}
            //   onChange={(e) => setAssignBody(e.target.value)}
            placeholder="type here....."
            className="p-3 rounded text-gray-400"
            name="task"
            id=""
            cols="40"
            rows="3"
          ></textarea>
          {/* <div class="form-control text-center">
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
        </div> */}
          <div class="card-actions mt-3">
            <button class="mx-auto btn btn-warning">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Assign;
