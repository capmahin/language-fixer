import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const navigateLearn = () => {
    navigate("/learn");
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>

        <p>{service.description}</p>
        <div className="card-actions justify-end">
          <Link to="/learn" onClick={navigateLearn} className="btn bg-teal-500 text-slate-200 border-0 w-36">
            {service.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
