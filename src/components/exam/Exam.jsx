import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {increment, studentAnswer} from "../../redux/actions";
import './exam.css'


const Exam = () => {
  const questions = useSelector((state) => state.questionsReducer.questions);
  let questionCounter = useSelector((state) => state.questionsReducer.questionCounter);
  const  dispatch = useDispatch();
  const rendom = Math.floor(Math.random() * questions.length)

  const addAnswer = (answer) => {
    dispatch(studentAnswer(answer))
        dispatch(increment(1))
  }
  



  
  console.log(rendom);

 const submit = () => {
    if(questionCounter === 4) {
        return (
            <Link className="btn btn-primary" to="/result" >Submit </Link> 
        )
    }
 }
 

  return (
    <section className="container mt-4">
      <div>
        <h2 className="text-center">{questions[questionCounter].questionTitle}</h2>

        {questions[questionCounter].answers.map((answer) => {
          return (
            <ul className="mt-4">
              <li onClick={() => addAnswer(answer)}>{answer.answerText}</li>
            </ul>   
                    
          );        
        })}

        {submit()}

      </div>
    </section>
  );
};

export default Exam;
