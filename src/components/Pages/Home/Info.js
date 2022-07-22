import React from "react";
import InfoCard from "./InfoCard";
import english from "../../../assets/Info/english.jpg";
import french from "../../../assets/Info/french.jpg";
import spanish from "../../../assets/Info/spanish.webp";
import chinese from "../../../assets/Info/Chinese.jpg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pb-16 px-6 bg-slate-300 pt-20">
      <InfoCard cardTitle="Learn English" img={english}></InfoCard>
      <InfoCard cardTitle="Learn Spanish" img={spanish}></InfoCard>
      <InfoCard cardTitle="Learn French" img={french}></InfoCard>
      <InfoCard cardTitle="Learn Chinese" img={chinese}></InfoCard>
    </div>
  );
};

export default Info;
