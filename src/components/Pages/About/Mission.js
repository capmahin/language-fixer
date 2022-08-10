import React from "react";
import education from "../../../assets/personalized-education.svg";
import fun from "../../../assets/learning-fun.svg";
import universal_1 from "../../../assets/universally-accessible-1.svg";
import universal_2 from "../../../assets/universally-accessible-2.svg";

const Mission = () => {
    return (
        <div className="lg:mx-56 mx-10 my-10 ">
            <div className=" flex lg:flex-row flex-col justify-between items-center gap-10">
                <img src={education} alt="education" />
                <div>
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        Personalized education
                    </h1>
                    <p>
                        Everyone learns in different ways. For the first time in
                        history, we can analyze how millions of people learn at
                        once to create the most effective educational system
                        possible and tailor it to each student. <br /> <br />{" "}
                        Our ultimate goal is to give everyone access to a
                        private tutor experience through technology.
                    </p>
                </div>
            </div>
            <hr className="my-10" />
            <div className=" flex lg:flex-row flex-col justify-between items-center gap-10">
                <div>
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        Making learning fun
                    </h1>
                    <p>
                        It's hard to stay motivated when learning online, so we
                        made Duolingo so fun that people would prefer picking up
                        new skills over playing a game.
                    </p>
                </div>
                <img src={fun} alt="fun" />
            </div>
            <hr className="my-10" />
            <div>
                <h1 className="text-accent font-bold text-2xl mb-3">
                    Universal accessible
                </h1>
                <p>
                    There are over 1.2 billion people learning a language and
                    the majority are doing so to gain access to better
                    opportunities. Unfortunately, learning a language is
                    expensive and inaccessible to most. <br /> <br />
                    We created Duolingo so that everyone could have a chance.
                    Free language education – no hidden fees, no premium
                    content, just free. <br />
                    <br />
                    Duolingo is used by the richest man in the world and many
                    Hollywood stars, and at the same time by public schools
                    students in developing countries. We believe true equality
                    is when spending more can't buy you a better education.
                </p>
                <div className="flex justify-evenly mt-10">
                    <img src={universal_1} alt="" />
                    <img
                        className="mt-5 lg:block hidden"
                        src={universal_2}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Mission;
