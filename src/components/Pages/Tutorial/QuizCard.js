import React from "react";
import "./QuizCard.css";

const QuizCard = (props) => {
    return <div className="card">{props.children}</div>;
};

export default QuizCard;
