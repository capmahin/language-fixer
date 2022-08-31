import React from "react";
import { Navigate, Route, Routes } from "react-router";
import FinalScreen from "./FinalScreen";
import Settings from "./Settings";
import StartLearning from "./StartLearning";

const Learn = () => {
    return (
        <div>
            a
            <Routes>
                <Route index element={<Navigate to="settings" />} />
                <Route path="settings" element={<Settings />} />
                <Route path="/start_learning" element={<StartLearning />} />
                <Route path="/final_screen" element={<FinalScreen />} />
            </Routes>
        </div>
    );
};

export default Learn;
