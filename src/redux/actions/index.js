import {ANSWER, INCREMENT,  ENTER__NAME} from './types'

export const studentAnswer = (payload) => {
    return {
        type : ANSWER,
        payload
    }
}

export const increment = (payload) => {
    return {
        type : INCREMENT,
        payload
    }
}

export const enterName = (payload) => {
    return {
        type : ENTER__NAME,
        payload
    }
}




