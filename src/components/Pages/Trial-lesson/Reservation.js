import React from "react";
// import reserve from "../../../assets/Reservation.jpg";
// import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <div className="w-3/4 lg:w-2/4 card text-gray-300 mx-auto my-12 pt-5 lg:p-12 bg-gray-700 text-center">
      <h1 className="lg:text-4xl text-lg">
        What language do you want to speak?
      </h1>
      <p className="my-3 px-2 text-sm lg:text-base lg:px-12">
        Our 200 teachers have helped over 20,000 students in over 150 countries
        get fluent since 2008.
      </p>
      <div className="">
        <Link to="/trial/spanish" className="btn btn-primary m-1 w-1/4">
          Spanish
        </Link>
        <Link to="/trial/english" className="btn btn-primary m-1 w-1/4">
          English
        </Link>
        <Link to="/trial/french" className="btn btn-primary m-1 w-1/4">
          French
        </Link>
        <Link to="/trial/chinese" className="btn btn-primary m-1 w-1/4">
          Chinese
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
