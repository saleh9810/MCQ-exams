import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './result.css'
import { useDispatch } from "react-redux";
import {emptyAnswers} from "../../redux/actions";





const Result = () => {
    const questions = useSelector((state) => state.questionsReducer.questions);
    const result = useSelector((state) => state.questionsReducer.answers);
    const  dispatch = useDispatch();




    const showCorrectAnswers  = () => {
        if(result.length === 0) {
            return (
                <div>
                    <h3>You didn't get any correct answer </h3>
                </div>
            )
        }
        return (
        result.map(item => {
        let answer = item.answers.filter(isCorrect => isCorrect.isCorrect === true)
        let answerText = answer.map(item =>  item.answerText)
        
        console.log(answer);
            return (
                <div key={item.questionTitle}>
                <h3 >{item.questionTitle}  <span>{answerText}</span></h3>
               
                </div>
            )
        })
        )
    }

    const showWrongAnswers = () => {
      let  wrongQuestions = questions.filter(function(item) {
            return !result.includes(item);
        })
        return (
        wrongQuestions.map(item => {
            let answer = item.answers.filter(isCorrect => isCorrect.isCorrect === true)
            let answerText = answer.map(item =>  item.answerText)
            return (
                <div key={item.questionTitle}>
                <h3>{item.questionTitle}  <span>{answerText}</span></h3>
               
                </div>
            )
        })
        )
    }

   


    return (
        <div className="text-center">
            <div className='correctAnswers'>
            <h2 className='mt-4'>Questions answered</h2>
            {showCorrectAnswers()}
            </div>
            <div className='WrongAnswers'>
                <h2>Unanswered questions</h2>
            {showWrongAnswers()}
            </div>

           <p > <Link  onClick={() => dispatch(emptyAnswers(1))} className="btn again"  to="/">Do It Again </Link></p>
            
        </div>
    )
}

export default Result
