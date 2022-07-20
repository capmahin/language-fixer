import React from "react";

import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "XXXX",
            description: ".....",
        },
        {
            _id: 2,
            name: "YYY",
            description: ".....",
        },
        {
            _id: 3,
            name: "ZZZ",
            description: ".....",
        },
    ];
    return (
        // sefserf
        <div className="my-28 mx-10">
            <div className="text-center ">
                <h2 className="text-primary text-5xl font-bold uppercase pb-10">
                    Our Services
                </h2>
                <h2 className="text-2xl pb-5">Service we provide</h2>
            </div>
            <div className="grid sm.grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
