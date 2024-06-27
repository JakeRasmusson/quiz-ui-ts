import { AlertColor, ButtonColor } from "../types" 

export const quizContainerEl = document.getElementById('quiz-container')
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

interface CreateButtonArgs {
  text: string
  color?: ButtonColor
  type?: 'button' | 'submit'
  onClick?(event: Event): void
}

export const createButton = ({
  text,
  color = 'btn-info',
  type = 'button',
  onClick,
}: CreateButtonArgs) => {
  const button = document.createElement('button')
  button.classList.add('btn')
  button.classList.add(color)
  button.innerText = text
  button.type = type
  if (onClick) {
    button.addEventListener('click', onClick)
  }
  return button
}


interface CreateInputArgs {
  name: string
  required?: boolean
  type?: HTMLInputElement['type']
}

export const createInput = ({
  name,
  required = false,
  type = 'text'
}: CreateInputArgs) => {
  const input = document.createElement('input')
  input.name = name
  input.type = type
  input.classList.add('form-control')
  input.required = required
  return input
}

export const renderFinalScoreAlert = (score: number, numQuestions: number) => {
  if (!quizContainerEl) throw Error('Missing quizContainerEl in DOM')
  quizContainerEl.innerHTML = ''
  
  const scorePercentage = (score / numQuestions) * 100
  let color: AlertColor = 'alert-danger'
  let text: string = 'Better luck next time.'

  if (scorePercentage >= 80) {
    color = 'alert-success'
    text = 'Great job!'
  } else if (scorePercentage < 80 && scorePercentage > 67) {
    color = 'alert-warning'
    text = 'Not too shabby'
  }

  text = `Score ${score}/${numQuestions} (${scorePercentage}%). ${text}`

  const alert = createAlert({ text, color })

  return alert
}