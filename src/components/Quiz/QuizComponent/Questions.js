import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import "./Questions.css";

const Questions = ({
    currentQues,
    setCurrentQues,
    questions,
    options,
    correct,
    score,
    setScore,
    setQuestions,
}) => {
    const [selectedd, setselectedd] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSelect = (option) => {
        if (selectedd === option && selectedd === correct) {
            return "selected";
        } else if (selectedd === option && selectedd !== correct) {
            return "wrong";
        } else if (option === correct) {
            return "selected";
        }
    };
    const handleCheck = (option) => {
        setselectedd(option);
        if (option === correct) {
            setScore(score + 1);
            setError(false);
        }
    };

    const handleNext = () => {
        if (currentQues > 8) {
            navigate("/result");
        } else if (selectedd) {
            setCurrentQues(currentQues + 1);
            setselectedd();
            setError(false);
        } else {
            setError("Please select an option");
        }
    };
    const handleQuit = () => {
        setCurrentQues(0);
        setQuestions();
        setScore(0);
    };

    return (
        <div className="">
            <div className="question">
                <h1>Question Number: {currentQues + 1}</h1>
                <div className="singleQuestion">
                    <h2>{questions[currentQues].question}</h2>
                    <div className="options">
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        {options &&
                            options.map((option, index) => (
                                <button
                                    onClick={() => {
                                        handleCheck(option);
                                    }}
                                    className={`singleOption ${
                                        selectedd && handleSelect(option)
                                    }`}
                                    key={index}
                                    disabled={selectedd}
                                >
                                    {option}
                                </button>
                            ))}
                    </div>
                </div>
                <div className="controls mt-5">
                    <Link to="/quiz">
                        <button
                            onClick={handleQuit}
                            className="btn btn-error btn-sm"
                        >
                            Quit
                        </button>
                    </Link>
                    <button
                        onClick={handleNext}
                        className="btn btn-sm btn-success"
                    >
                        Next Question
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Questions;
