import React from "react";

const InfoCard = ({ img, cardTitle }) => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-48" src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
