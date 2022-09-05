import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Categories from "../Dashboard/Data/Categories";

const UpdateQuiz = ({ fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category);
            navigate("/dashboard/update_quiz/update_question");
        }
        console.log(category);
    };
    return (
        <div className="text-white border rounded-lg m-44">
            <div>
                <p className="text-center font-bold text-3xl mb-20 mt-8">
                    Select language
                </p>
            </div>
            <div className="text-center space-x-5 mb-8 text-black">
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
            <div className="card-actions justify-center">
                <button onClick={handleSubmit} className="btn btn-accent mb-5">
                    Select
                </button>
            </div>
        </div>
    );
};

export default UpdateQuiz;
