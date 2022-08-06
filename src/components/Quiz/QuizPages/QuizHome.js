import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../Data/Categories";
import ErrorMessage from "../QuizComponent/ErrorMessage";

const QuizHome = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/quizQues");
        }
    };
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
                <div className="card-body">
                    <h2 className="card-title justify-center">Quiz Settings</h2>
                    {error && (
                        <ErrorMessage className="text-red-600">
                            Please Fill all the Fields!
                        </ErrorMessage>
                    )}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select Language</span>
                        </label>
                        <select
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            select
                        >
                            {Categories.map((cat) => (
                                <option key={cat.category} value={cat.value}>
                                    {cat.category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select Difficulty</span>
                        </label>
                        <select
                            onChange={(e) => setDifficulty(e.target.value)}
                            value={difficulty}
                            select
                            className="input input-bordered w-full max-w-xs"
                        >
                            <option key="Select DiffiCulty" value="">
                                Select Difficulty
                            </option>
                            <option key="Easy" value="easy">
                                Easy
                            </option>
                            <option key="Medium" value="medium">
                                Medium
                            </option>
                            <option key="Hard" value="hard">
                                Hard
                            </option>
                        </select>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={handleSubmit} className="btn btn-primary">
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizHome;
