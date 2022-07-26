import React from "react";
import { Link, useNavigate } from "react-router-dom";
import banner2 from "../../../assets/banner/banner 2.png";
import borderPrimary from "../../../assets/border primary.png";

const Banner = () => {
    const navigate = useNavigate();
    const navigateAbout = () => {
        navigate("/about");
    };
    return (
        <div className="hero min-h-screen pb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={banner2}
                    className="max-w-xs lg:max-w-xl rounded-lg"
                    alt=""
                />
                <div className="px-4">
                    <h1 className="text-5xl font-bold text-accent">
                        New language, new opportunities, new you
                    </h1>
                    <p className="py-6 text-xl text-slate-300">
                        Language acquisition is the process by which humans
                        acquire the capacity to perceive and comprehend
                        language, as well as to produce and use words and
                        sentences to communicate. Language acquisition involves
                        structures, rules and representation.
                    </p>
                    <button className="btn uppercase text-primary font-bold bg-accent hover:bg-amber-300 border-0 hover:text-slate-50">
                        <Link to="about"> Try 1-on-1 free lesson</Link>
                    </button>
                </div>
                <img
                    className=" mt-96 lg:mt-80 lg:pt-24 pt-36 absolute"
                    src={borderPrimary}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;
