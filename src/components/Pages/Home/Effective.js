import React from "react";
import effective from "../../../assets/effective.svg";
import borderPrimary from "../../../assets/border primary.png";

const Effective = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center lg:flex-row my-20 space-x-10 ">
                <div className="w-64">
                    <img src={effective} alt="effective" />
                </div>
                <div className="space-y-5 w-96">
                    <h1 className="text-accent font-bold text-2xl">
                        Effective and efficient learning
                    </h1>
                    <p className="text-white">
                        Our courses effectively and efficiently teach reading,
                        listening, and speaking skills. Check out our latest
                        research!
                    </p>
                </div>
            </div>
            <img className="absolute" src={borderPrimary} alt="" />
        </div>
    );
};

export default Effective;
