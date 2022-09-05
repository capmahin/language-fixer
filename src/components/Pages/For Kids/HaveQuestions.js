import React from "react";
import borderPrimary from "../../../assets/border primary.png";
import borderImg from "../../../assets/For Kids/banner border.png";

const HaveQuestions = () => {
    return (
        <div className="relative ">
            <div className=" relative pb-36 lg:pb-0 ">
                <img
                    className=" absolute w-screen lg:hidden bg-yellow-400"
                    src={borderImg}
                    alt=""
                />
            </div>
            <div className="absolute block lg:hidden text-slate-300 w-48 pl-4 top-20">
                <h2 className="text-lg lg:text-3xl">
                    Come {"&"} Learn With Us
                </h2>
                <p className="text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est, rerum delectus!
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center my-20 lg:my-30 p-4">
                <h2 className="text-xl lg:text-3xl font-bold tracking-wide">
                    <span className="text-orange-500">Have Questions? </span>
                    <span className="text-blue-600"> Call </span>{" "}
                    <span className="text-lime-500"> 00011115522 </span>
                    <span className="text-blue-600"> or </span>{" "}
                    <span className="text-lime-500"> 11001100055 </span>
                </h2>
                <button className="btn btn-outline btn-warning rounded-3xl w-28 lg:w-44 mt-8 lg:mt-0">
                    Contact Us
                </button>
            </div>
            <img className="absolute w-screen" src={borderPrimary} alt="" />
        </div>
    );
};

export default HaveQuestions;
