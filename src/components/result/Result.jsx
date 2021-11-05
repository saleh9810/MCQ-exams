import React from 'react'
import { useSelector } from "react-redux";
import './result.css'


const Result = () => {
    const questions = useSelector((state) => state.questionsReducer.questions);
    const result = useSelector((state) => state.questionsReducer.answers);
    const name = useSelector((state) => state.questionsReducer.name);

    return (
        <div className="resultBox">
            <h2 className="text-center p-5">{name} You got {result.length} out  {questions.length}</h2>
        </div>
    )
}

export default Result
