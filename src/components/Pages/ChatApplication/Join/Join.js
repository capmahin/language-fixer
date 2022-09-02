import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Join = () => {
  let navigate = useNavigate();

  const [error, setError] = useState("");
  const [data, setData] = useState({ name: "", room: "" });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    if (!data.name) {
      setError("Please enter your name.");
      return false;
    }
    if (!data.room) {
      setError("Please select room.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      navigate(`/chat/${data.room}`, { state: data });
    }
  };

  return (
    <div className=" bg-center min-h-screen px-3 py-4 shadow  text-dark rounded row flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4 ">
          <h2 className="text-accent text-2xl font-bold mb-4">Welcome to Language-Fixer-Chat</h2>
        </div>
        <div className="form-group mb-4">
          <input
            type="name"
            className="input input-bordered w-full max-w-xs"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4 ">
          <select
            className="select  select-accent mb-4 w-full max-w-xs"
            name="room"
            onChange={handleChange}
          >
            <option value="">Select Room</option>
            <option value="Gaming">Gaming</option>
            <option value="Coding">Coding</option>
            <option value="Social Media">Social Media</option>
          </select>
          {error ? <small className="text-red-600 text-base">{error}</small> : ""}
        </div>
        <div className="flex flex-col justify-center items-center">

          <button type="submit" className="btn bg-accent border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 my-2">
            Submit
          </button>
        </div>
      </form >
    </div >
  );
};


export default Join;
