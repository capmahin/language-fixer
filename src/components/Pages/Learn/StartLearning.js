import React, { useEffect, useState } from "react";

const StartLearning = ({ languages, questions }) => {
    useEffect(() => {
        console.log(questions);
    }, []);
    return <div className="text-white">{questions}</div>;
};

export default StartLearning;
