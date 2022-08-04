import React from "react";
import ReactPlayer from "react-player";

const Service = ({ service }) => {
  const { name, video } = service;
  return (
    <div class="rounded-xl shadow-xl">
      <figure>
        <ReactPlayer width="620px" url={video} />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-xl">{name}</h2>
      </div>
    </div>
  );
};

export default Service;
