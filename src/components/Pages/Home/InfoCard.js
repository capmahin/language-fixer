import React from "react";

const InfoCard = ({ img, cardTitle }) => {
  return (
    <div className="bg-base-100 shadow-xl flex items-center rounded-lg">
      <div className="p-5 ">
        <img className="w-36 rounded-lg" src={img} alt="Album" />
      </div>
      <div className="">
        <h2 className="card-title px-2">{cardTitle}</h2>
      </div>
    </div>
  );
};

export default InfoCard;
