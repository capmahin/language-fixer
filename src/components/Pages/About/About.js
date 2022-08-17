import React from "react";
import { Navigate, Route, Routes } from "react-router";
import AboutNav from "./AboutNav";

import Approach from "./Approach";
import Mission from "./Mission";
import Team from "./Team";

const About = () => {
    return (
        <div className="text-white">
            <AboutNav />
            {
                <Routes>
                    <Route index element={<Navigate to="mission" />} />
                    <Route path="mission" element={<Mission />} />
                    <Route path="approach" element={<Approach />} />
                    <Route path="team" element={<Team />} />
                </Routes>
            }
        </div>
    );
};

export default About;
