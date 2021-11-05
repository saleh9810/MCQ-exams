import {ANSWER, INCREMENT, DECREMENT, GET__QUESTIONS} from './types'

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

export const decrement = (payload) => {
    return {
        type : DECREMENT,
        payload
    }
}

