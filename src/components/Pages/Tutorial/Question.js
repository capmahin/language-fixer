import React from "react";
import "./Question.css";
import QuizCard from "./QuizCard";

const Question = ({
    questionIndex,
    setQuestionIndex,
    questions,
    setShowQuestionPage,
    setShowFinalPage,
    score,
    setScore,
}) => {
    const handleClick = (isCorrect) => {
        if (questionIndex < 9) {
            if (isCorrect) {
                setScore((score) => (score += 100));
            }
            setQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            if (isCorrect) {
                setScore((score) => (score += 100));
            }
            setShowQuestionPage(false);
            setShowFinalPage(true);
        }
    };
    return (
        <QuizCard>
            <>
                {questions.map((qus, index) => (
                    <p key={index}>{qus.questionText}</p>
                ))}
                <div className="answers">
                    {questions.map((answer, index) => (
                        <div className="answer" key={index}>
                            {answer.answers.map((ans, index) => (
                                <p
                                    key={index}
                                    onClick={() =>
                                        handleClick(ans.correctAnswer)
                                    }
                                >
                                    {ans.answerText}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </>
            <p className="score">
                Score: <span>{score}</span>
            </p>
            <p className="question_number">
                Question <span>{questionIndex + 1}</span>/10
            </p>
        </QuizCard>
    );
};

export default Question;
