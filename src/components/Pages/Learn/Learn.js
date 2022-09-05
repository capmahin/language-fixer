import React from "react";
import { Navigate, Route, Routes } from "react-router";
import useAxios from "../../hooks/useAxios";
import FinalScreen from "./FinalScreen";
import Settings from "./Settings";
import StartLearning from "./StartLearning";

const Learn = () => {
    const { response, err, loading } = useAxios(
        "http://localhost:5000/learning"
    );
    console.log("learn", response);
    if (loading) {
        return <div>...loading</div>;
    }
    return (
        <div>
            a
            <Routes>
                <Route index element={<Navigate to="settings" />} />
                <Route
                    path="settings"
                    element={<Settings response={response} />}
                />
                <Route
                    path="start_learning"
                    element={<StartLearning response={response} />}
                />
                <Route path="final_screen" element={<FinalScreen />} />
            </Routes>
        </div>
    );
};

export default Learn;
