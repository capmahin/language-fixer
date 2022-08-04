import React, { useState } from "react";
// import reserve from "../../../assets/Reservation.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const Reservation = () => {
  const [selected, setSelected] = useState(new Date());

  function btn() {
    console.log("this is click");
  }
  btn();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div>
      <div className="w-3/4 lg:w-2/4 card text-gray-300 mx-auto my-12 pt-5 lg:p-12 bg-gray-700 text-center">
        <h1 className="lg:text-4xl text-lg">
          What language do you want to speak?
        </h1>
        <p className="my-3 px-2 text-sm lg:text-base lg:px-12">
          Our 200 teachers have helped over 20,000 students in over 150
          countries get fluent since 2008.
        </p>
        <div className="" onClick={btn()}>
          <div className="btn btn-primary m-1 w-1/4">Spanish</div>
          <div className="btn btn-primary m-1 w-1/4">English</div>
          <div className="btn btn-primary m-1 w-1/4">French</div>
          <div className="btn btn-primary m-1 w-1/4">Chinese</div>
        </div>
      </div>
      <div className="w-3/4 lg:w-2/4 card text-gray-300 mx-auto my-12 pt-5 lg:p-12 bg-gray-700 text-center">
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="text-xs lg:text-sm m-auto">
            <DayPicker
              className="m-auto"
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
          <div class="form-control w-3/4 lg:w-2/4 mx-auto text-black">
            <label class="label">
              <span class="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <label class="label">
              <span class="label-text text-white">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <label class="label">
              <span class="label-text text-white">Selected Date</span>
            </label>
            <input
              type="text"
              disabled
              placeholder="Type here"
              value={format(selected, "PP")}
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <label class="label">
              <span class="label-text text-white">Language</span>
            </label>
            <input
              type="text"
              // value={btn()}
              placeholder="Type here"
              class="input input-bordered w-full input-sm max-w-xs"
            />
            <input
              placeholder="Submit"
              class="btn btn-sm btn-primary w-full my-5 max-w-xs text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
