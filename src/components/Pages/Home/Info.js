import React from "react";
import InfoCard from "./InfoCard";
import english from "../../../assets/Info/english.jpg";
import french from "../../../assets/Info/french.jpg";
import spanish from "../../../assets/Info/spanish.webp";
import chinese from "../../../assets/Info/Chinese.jpg";
import borderAccent from "../../../assets/border accent.png"

const Info = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pb-28 px-6 bg-accent text-slate-700 pt-44">
        <InfoCard cardTitle="Learn English" img={english}></InfoCard>
        <InfoCard cardTitle="Learn Spanish" img={spanish}></InfoCard>
        <InfoCard cardTitle="Learn  French" img={french}></InfoCard>
        <InfoCard cardTitle="Learn Chinese" img={chinese}></InfoCard>
      </div>
      <img className="w-screen" src={borderAccent} alt="" />
    </div>
  );
};

export default Info;
