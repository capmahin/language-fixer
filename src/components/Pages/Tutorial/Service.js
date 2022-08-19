import React from "react";
import ReactPlayer from "react-player";

const Service = ({ service }) => {
  const { name, video } = service;
  return (
    <div className="card card-compact bg-sky-800 w-3/4 shadow-xl">
      <div className="card-body">
        <h2 className=" text-gray-200 text-center text-xl">{name}</h2>
        <figure>
          <ReactPlayer url={video} />
        </figure>
      </div>
    </div>
  );
};

export default Service;
