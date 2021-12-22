import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { enterName } from "../../redux/actions";

import Exam from "../exam/Exam";
import "./home.css";

const Home = () => {
  const questions = useSelector((state) => state.questionsReducer.questions);
  const name = useSelector((state) => state.questionsReducer.name);
  const  dispatch = useDispatch();
  let questionCounter = useSelector(
    (state) => state.questionsReducer.questionCounter
  );

  useEffect(() => {
    dispatch(enterName(prompt("Enter Your Name")))
  }, [dispatch]);

  const addName = () => {
    if (!name) {
      return (
        <div className="text-center mt-5">
          <h4 className="mb-4">  You must enter your name to be able to enter  to exam </h4>
          <button
            className="btn btn-danger"
            onClick={() =>  dispatch(enterName(prompt("Enter Your Name")))}
          >
            Add Your name
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="text-center text-light bg-primary">
            <h5 className="pt-3">
              question {questionCounter + 1} of {questions.length}
            </h5>
            <h3 className=" pb-5">Good Luck {name}</h3>
          </div>

          <Exam />
        </div>
      );
    }
  };

  return <div className="">{addName()}</div>;
};

export default Home;
