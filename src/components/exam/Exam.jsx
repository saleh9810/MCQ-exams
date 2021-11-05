import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {increment, studentAnswer} from "../../redux/actions";
import './exam.css'


const Exam = () => {
  const questions = useSelector((state) => state.questionsReducer.questions);
  let questionCounter = useSelector((state) => state.questionsReducer.questionCounter);
  const  dispatch = useDispatch();

  const addAnswer = (answer) => {
    dispatch(studentAnswer(answer))
        dispatch(increment(1))
  }
  
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }



  if (questionCounter === 0) {

    shuffle(questions);

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

      </div>
    </section>
  );
};

export default Exam;
