import React from "react";
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
        </div>
    );
};

export default Banner;
