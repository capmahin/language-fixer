import React from "react";
import ReactPlayer from "react-player";

const Service = ({ service }) => {
  const { name, video } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <ReactPlayer url={video} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{name}</h2>
      </div>
    </div>
  );
};

export default Service;
