import React, { useEffect, useState } from "react";
import Questions from "../QuizComponent/Questions";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
    const [options, setOptions] = useState([]);
    const [currentQues, setCurrentQues] = useState(0);

    useEffect(() => {
        console.log(questions);
        setOptions(
            questions &&
            handleShuffle([
                questions[currentQues]?.correct_answer,
                ...questions[currentQues]?.incorrect_answers,
            ])
        );
    }, [questions, currentQues]);
    console.log(options);

    const handleShuffle = (optionss) => {
        const shuffledOptions = optionss.sort(() => Math.random() - 0.5);
        return shuffledOptions;
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-16">
                <div className="card-body">
                    <h2 className="card-title justify-center">Welcome {name}</h2>

                    {questions ? (
                        <>
                            <div className="flex justify-between">
                                <span>{questions[currentQues].category}</span>
                                <span>Score: {score}</span>
                            </div>
                            <Questions
                                currentQues={currentQues}
                                setCurrentQues={setCurrentQues}
                                questions={questions}
                                options={options}
                                correct={questions[currentQues]?.correct_answer}
                                score={score}
                                setScore={setScore}
                                setQuestions={setQuestions}
                            ></Questions>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
