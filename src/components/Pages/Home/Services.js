import React from "react";

import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "LIVE CHAT",
      description: ".....",
    },
    {
      _id: 2,
      name: "QUIZ",
      description: ".....",
    },
    {
      _id: 3,
      name: "TUTORIAL",
      description: ".....",
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h2 className="text-teal-500 text-5xl font-bold uppercase pb-10">
          Our Services
        </h2>
        <h2 className="text-2xl pb-5">Service we provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
