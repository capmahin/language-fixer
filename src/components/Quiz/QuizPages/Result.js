import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Result = ({ name, score, setCurrentQues, setQuestions, setScore }) => {
    const navigate = useNavigate();

    const handleGoToHome = () => {
        setCurrentQues(0);
        setQuestions();
        setScore(0);
    };

    useEffect(() => {
        if (!name) {
            navigate("/quiz");
        }
    }, [name, navigate]);

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className="card-title justify-center">Result</h1>
                    {score < 5 ? (
                        <p>
                            Sorry, You got{" "}
                            <span className="text-red-500 font-bold">
                                {score}
                            </span>{" "}
                            😥.{" "}
                        </p>
                    ) : (
                        <div>
                            <p>
                                Congratulations 🎉 You got{" "}
                                <span className="text-green-600 font-bold">
                                    {score}
                                </span>{" "}
                                😎 you can get a certificate 💃
                            </p>
                            <div className="flex justify-between my-5">
                                <Link to="/">
                                    <button
                                        onClick={handleGoToHome}
                                        className="btn btn-sm btn-error"
                                    >
                                        Go to Home
                                    </button>
                                </Link>

                                <Link to="/quiz">
                                    <button className="btn btn-sm btn-warning">
                                        Retake Quiz
                                    </button>
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <Link to="/certificate">
                                    <button className="btn btn-sm btn-success">
                                        Get Certificate
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Result;
