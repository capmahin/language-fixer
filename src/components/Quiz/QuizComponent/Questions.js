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
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSelect = (option) => {
        if (selected === option && selected === correct) {
            return "select";
        } else if (selected === option && selected !== correct) {
            return "wrong";
        } else if (option === correct) {
            return "select";
        }
    };
    const handleCheck = (option) => {
        setSelected(option);
        if (option === correct) {
            setScore(score + 1);
            setError(false);
        }
    };

    const handleNext = () => {
        if (currentQues > 8) {
            navigate("/result");
        } else if (selected) {
            setCurrentQues(currentQues + 1);
            setSelected();
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
                                        selected && handleSelect(option)
                                    }`}
                                    key={index}
                                    disabled={selected}
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
