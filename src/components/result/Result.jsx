import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './result.css'


const Result = () => {
    const questions = useSelector((state) => state.questionsReducer.questions);
    const result = useSelector((state) => state.questionsReducer.answers);
    const name = useSelector((state) => state.questionsReducer.name);





    return (
        <div className="resultBox text-center">
            <h2 className=" p-5">{name} You got {result.length} out  {questions.length}</h2>
            <Link className="btn btn-light"  to="/">Do It Again </Link>
            
        </div>
    )
}

export default Result
