import { AlertColor, ButtonColor } from "../types" 

export const quizContainerEl = document.getElementById('quizContainer')
export const questionTextEl = document.getElementById('question-text')
export const answerForm = document.getElementById('answer-form')
export const answersContainerEl = document.getElementById('answers-container')
export const submitBtn = answerForm?.querySelector('button[type="submit"]')

export const updateQuestionTextEl = (text: string) => {
  if (!questionTextEl) throw Error('Missing questionTextEl in DOM')
  questionTextEl.innerText = text
}

interface CreateAlertArgs {
  text: string
  color?: AlertColor
}

export const createAlert = ({ text, color = 'alert-info' }: CreateAlertArgs) => {
  const alert = document.createElement('div')
  alert.classList.add('alert')
  alert.classList.add(color)
  alert.innerText = text
  return alert
}