import {ANSWER, INCREMENT,ENTER__NAME} from "../actions/types"
import history from "../../history"

const initialState = {
    questions : [
        {
            questionTitle : "What is the capital of USA ?",
            answers : [
                {answerText : 'dallas texas', isCorrect : false},
                {answerText : 'New York', isCorrect : false},
                {answerText : 'Washington', isCorrect : true},
                {answerText : ' Pires', isCorrect : false},
            ] 
        },

        {
            questionTitle : "How many continents are there in the world ?",
            answers : [
                {answerText : '1', isCorrect : false},
                {answerText : '4', isCorrect : false},
                {answerText : '5', isCorrect : false},
                {answerText : ' 7', isCorrect : true},
            ] 
        },

        {
            questionTitle : "What city hosted the 2012 Summer Olympics ?",
            answers : [
                {answerText : 'New York', isCorrect : false},
                {answerText : 'Dubai', isCorrect : false},
                {answerText : 'London', isCorrect : true},
                {answerText : ' Pires', isCorrect : false},
            ] 
        },

        {
            questionTitle : "Which musical artist is known for her song “Big Girls Don’t Cry?",
            answers : [
                {answerText : 'Fergie', isCorrect : true},
                {answerText : 'Queen', isCorrect : false},
                {answerText : 'michael jackson', isCorrect : false},
                {answerText : 'prince', isCorrect : false},
            ] 
        },

        {
            questionTitle : "who is the president of united states of america ?",
            answers : [
                {answerText : 'Joe Biden', isCorrect : true},
                {answerText : 'Donald Trump', isCorrect : false},
                {answerText : 'Barack Obama', isCorrect : false},
                {answerText : 'George W. Bush', isCorrect : false},
            ] 
        }
    ],
    questionCounter :  0,
    name : '',
    answers : []
}

function  questionsReducer(state = initialState, action) {

    switch(action.type) {

        case ENTER__NAME :
            return {
                ...state,
                name : state.name = action.payload
            }

        
        case ANSWER : 
            
        if(state.answers.some(answer => answer.answerText === action.payload.answerText) || action.payload.isCorrect === false) {
            return state 
        } 
        return {
            ...state,
            answers : [action.payload, ...state.answers]

         } 
         
         
       case INCREMENT : 
       if(state.questionCounter === state.questions.length - 1) {
        history.push('/result')
        return {
            ...state,
            questionCounter : state.questionCounter = 0
        }

       }
            return {
                ...state,
                questionCounter : state.questionCounter + action.payload
            }
            
       
        default: return state
    }
}

export default questionsReducer;