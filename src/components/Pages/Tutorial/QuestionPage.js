import React, { useState } from "react";
import Question from "./Question";
import { questions } from "./questions";

const QuestionPage = ({ score, setScore }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    return (
        <>
            <Question
                questionIndex={questionIndex}
                questions={questions}
                setQuestionIndex={setQuestionIndex}
                score={score}
                setScore={setScore}
            ></Question>
        </>
    );
};

export default QuestionPage;
