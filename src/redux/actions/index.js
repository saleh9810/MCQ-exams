import {ANSWER, INCREMENT,  ENTER__NAME, EMPTY__ANSWERS} from './types'

export const studentAnswer = (answer, question) => {
    return {
        type : ANSWER,
        answer,
        question
    }
}

export const increment = (payload) => {
    return {
        type : INCREMENT,
        payload
    }
}

export const emptyAnswers = (payload) => {
    return {
        type : EMPTY__ANSWERS,
        payload
    }
}


export const enterName = (payload) => {
    return {
        type : ENTER__NAME,
        payload
    }
}




