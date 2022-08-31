import React, { useEffect } from "react";

const UpdateQuestion = ({ questions }) => {
    useEffect(() => {
        console.log(questions);
    }, [questions]);
    return (
        <div className="text-white">
            <h1>{questions}</h1>
        </div>
    );
};

export default UpdateQuestion;
