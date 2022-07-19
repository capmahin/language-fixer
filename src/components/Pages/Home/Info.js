import React from "react";
import InfoCard from "./InfoCard";
import english from "../../../assets/Info/english.jpg";
import portugal from "../../../assets/Info/portugal.jpg";
import spanish from "../../../assets/Info/spanish.webp";
import chinese from "../../../assets/Info/Chinese.jpg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      <InfoCard cardTitle="Learning English" img={english}></InfoCard>
      <InfoCard cardTitle="Learning Portugies" img={portugal}></InfoCard>
      <InfoCard cardTitle="Learning Spanish" img={spanish}></InfoCard>
      <InfoCard cardTitle="Learning Chinese" img={chinese}></InfoCard>
    </div>
  );
};

export default Info;
