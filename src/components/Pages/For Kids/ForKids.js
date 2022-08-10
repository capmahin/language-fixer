import React from "react";
import { Link } from "react-router-dom";
import kidsBanner from '../../../assets/banner/kidsBanner.svg'
import borderPrimary from '../../../assets/border primary.png'
import HaveQuestions from "./HaveQuestions";
import KidsBanner from "./KidsBanner";
import KidsClasses from "./KidsClasses";
import KidsDayCare from "./KidsDayCare";
import KidsFacilities from "./KidsFacilities";
import KidsServices from "./KidsServices";
import KidsTeachers from "./KidsTeachers";

const Banner = () => {

    return (
        <div>
            <KidsBanner></KidsBanner>
            <HaveQuestions></HaveQuestions>
            <KidsServices></KidsServices>
            <KidsFacilities></KidsFacilities>
            <KidsDayCare></KidsDayCare>
            <KidsClasses></KidsClasses>
            <KidsTeachers></KidsTeachers>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse p-20">
                    <img src={kidsBanner} className="max-w-xs lg:max-w-xl rounded-lg" alt="" />
                    <div className="px-12">
                        <h1 className="text-5xl font-bold text-accent">
                            Learn new languages,with fun
                        </h1>
                        <p className="py-10 text-xl text-slate-300">
                            Language acquisition is the process by which humans acquire the
                            capacity to perceive and comprehend language, as well as to produce
                            and use words and sentences to communicate. Language acquisition
                            involves structures, rules and representation.
                        </p>
                        <button className="btn uppercase text-primary font-bold bg-accent hover:bg-amber-300 border-0 hover:text-slate-50">
                            <Link to="about">
                                About
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="pb-36 bg-gray-50">
                <img className="absolute w-screen" src={borderPrimary} alt="" />
            </div>
        </div>
    );
};

export default Banner;
