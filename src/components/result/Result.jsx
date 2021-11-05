import React from 'react'
import { useSelector } from "react-redux";


const Result = () => {
    const questions = useSelector((state) => state.questionsReducer.questions);
    const result = useSelector((state) => state.questionsReducer.answers);
    return (
        <div>
            <h2 className="text-center mt-5">You got {result.length} out  {questions.length}</h2>
        </div>
    )
}

export default Result
