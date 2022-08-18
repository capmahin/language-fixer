import React, { useEffect, useState } from "react";
import Service from "../Service";

const FranchTutorials = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services1.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-yellow-300 text-center">French Tutorials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-5 pt-6 px-5 py-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default FranchTutorials;
