import { Question } from "../types"


export const scoring = (question: Question, answer: string): boolean => {
    if (question.answer === answer.toLowerCase()){
        return true
    }
    return false

}