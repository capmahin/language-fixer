import React from "react";

const InfoCard = ({ img, cardTitle }) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure className="pl-5 pt-5">
        <img className="w-36" src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
      </div>
    </div>
  );
};

export default InfoCard;
