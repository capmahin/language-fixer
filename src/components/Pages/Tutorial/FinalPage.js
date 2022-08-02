import React from "react";
import "./FinalPage.css";
import QuizCard from "./QuizCard";

const FinalPage = ({
    score,
    setShowFinalPage,
    setShowStartingPage,
    topScore,
    setTopScore,
    setScore,
    userName,
    setUserName,
}) => {
    const handleClick = () => {
        if (score > topScore) {
            setTopScore(score);
        }
        setShowFinalPage(false);
        setShowStartingPage(true);
        setScore(0);
        setUserName("");
    };
    return (
        <div>
            <QuizCard>
                <div className="text-center">
                    <h1 className="m-5">
                        You have reached the end of the exam, {userName}!
                    </h1>
                    <h3 className="">
                        Your score is: <span>0</span>
                    </h3>
                    <h3 className="">{score}</h3>
                    <button className="btn btn-primary" onClick={handleClick}>
                        Retake Exam
                    </button>
                </div>
            </QuizCard>
        </div>
    );
};

export default FinalPage;
