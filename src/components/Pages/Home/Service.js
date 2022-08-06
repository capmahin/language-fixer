import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

  return (
    <div className="card card-compact w-96 shadow-xl bg-gray-300">
      <figure>
        <img src={service.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center text-slate-700">{service.name}</h2>
        <div className="flex justify-center">
          <img className="rounded-lg my-4 w-60" src={service.image} alt="" />
        </div>
        <div className="card-actions justify-end">
          <Link to={service.route} className="btn bg-accent py-3 text-primary hover:bg-yellow-300 border-0 w-36">
            {service.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
