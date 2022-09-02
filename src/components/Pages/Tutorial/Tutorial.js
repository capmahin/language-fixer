import React from "react";
import { useNavigate } from "react-router-dom";
import english from "../../../assets/Info/english.jpg";
import french from "../../../assets/Info/french.jpg";
import spanish from "../../../assets/Info/spanish.jpg";
import chinese from "../../../assets/Info/Chinese.jpg";

const Tutorial = () => {
  const navigate = useNavigate();
  const navigateEnglish = () => {
    navigate("/englishtutorial");
  };
  const navigateFrench = () => {
    navigate("/franchtutorial");
  };
  const navigateChinese = () => {
    navigate("/chinesetutorial");
  };
  const navigateSpanish = () => {
    navigate("/spanishtutorial");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-20 gap-4 ">
      <div className="">
        <figure onClick={navigateEnglish}>
          <img className="w-64 rounded-lg cursor-pointer" src={english} alt="" />
        </figure>
      </div>
      <div className="">
        <figure onClick={navigateSpanish}>
          <img className="w-64 rounded-lg cursor-pointer" src={spanish} alt="" />
        </figure>
      </div>
      <div className="">
        <figure onClick={navigateChinese}>
          <img className="w-64 rounded-lg cursor-pointer" src={chinese} alt="" />
        </figure>
      </div>
      <div className="">
        <figure onClick={navigateFrench}>
          <img className="w-64 rounded-lg cursor-pointer" src={french} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Tutorial;
