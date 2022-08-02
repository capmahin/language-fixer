import React from "react";
import { useNavigate } from "react-router-dom";
import QuizCard from "./QuizCard";

const StartingPage = ({ topScore, userName, setUserName }) => {
    const navigate = useNavigate();
    const startExam = () => {
        navigate("/questionQuiz");
    };
    return (
        <QuizCard>
            <div className="text-center text-black ">
                <h1 className="font-bold text-3xl m-6">
                    Welcome to your first Exam
                </h1>
                <h3 className="pb-3">Please Enter Your Name</h3>
            </div>
            <input
                type="text"
                className="username_input rounded-lg p-2 mb-4"
                placeholder="Username"
                defaultValue={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="btn btn-primary" onClick={startExam}>
                Start Exam
            </button>
            <p className="top_score">
                Top Score: <span className="text-black">{topScore}</span>
            </p>
        </QuizCard>
    );
};

export default StartingPage;
