import React from "react";
import ReactPlayer from "react-player";

const Service = ({ service }) => {
  const { name, video } = service;
  return (
    <div className="rounded-xl shadow-xl">
      <figure>
        <ReactPlayer width="620px" url={video} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{name}</h2>
      </div>
    </div>
  );
};

export default Service;
