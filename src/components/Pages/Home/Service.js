import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const navigateLearn = () => {
    navigate("/learn");
  };
  return (
    <div className="card card-compact w-80 shadow-xl">
      <figure>
        <img src={service.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{service.name}</h2>
        <div className="flex justify-center">
          <img className="rounded-lg my-4 w-60" src={service.image} alt="" />
        </div>
        <div className="card-actions justify-end">
          <Link to="/learn" onClick={navigateLearn} className="btn bg-accent text-primary hover:bg-yellow-300 border-0 w-36">
            {service.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
