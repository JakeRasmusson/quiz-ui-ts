import { QuizState, Question } from "./types"

import {
  questions,
  quizContainerEl,
  answerForm,
  answersContainerEl,
  updateQuestionTextEl,
  createAlert,
  createButton,
  createInput,
  renderFinalScoreAlert,
  createTapOptions, 
  scoring 
} from './utils'

const quizState: QuizState = {
  questionIndex: 0,
  score: 0
}

const renderAnswersUI = (currentQuestion: Question) => {
  if (!answersContainerEl) throw Error('Missing answersContainerEl in DOM')
  
  answersContainerEl.innerHTML = ''

  if (currentQuestion.ui === 'multipleChoice') {
    for (const choice of currentQuestion.choices) {
      const button = createButton({
        text: choice,
        color: 'btn-primary',
        type: 'submit'
      })
      answersContainerEl.appendChild(button)
    }
  } else if (currentQuestion.ui === 'tapOrdering') {
    const input = createInput({
      name: 'answer',
      required: true,
    })
    answersContainerEl.appendChild(input)
    for (const choice of currentQuestion.choices) {
      const button = createButton({
        text: choice,
        color: 'btn-primary',
        type: 'button',
        onClick(event) {
          const target = event.target as HTMLButtonElement
          const text = target?.innerText + ' ' ?? ''
          input.value = input.value + text
          target.classList.add('d-none')
        }
      })
      answersContainerEl.appendChild(button)
    }
  } else if (currentQuestion.ui === 'textInput') {
    const input = createInput({
      name: 'answer',
      required: true,
    })
    answersContainerEl.appendChild(input)
  } else {
    const alert = createAlert({ 
      text: 'No matching Question UI', 
      color: 'alert-danger' 
    })
    answersContainerEl.appendChild(alert)
  }
}

const renderQuestionUI = () => {
  const currentQuestion = questions[quizState.questionIndex]
  if (currentQuestion) {
    updateQuestionTextEl(currentQuestion.questionText)
    renderAnswersUI(currentQuestion)
  } else {
    const finalScoreAlert = renderFinalScoreAlert(quizState.score, questions.length)
    quizContainerEl?.appendChild(finalScoreAlert)
  }
}

interface SubmitEvent extends Event {
  readonly submitter: HTMLElement | null
}

const handleSubmit = (event: SubmitEvent) => {
  event.preventDefault()
  let answer:string
  const currentQuestion = questions[quizState.questionIndex]
  if (currentQuestion.ui === 'multipleChoice' && event.submitter) {
    answer = event.submitter.innerText
  } else if (currentQuestion.ui === 'textInput') {
    const textAnswer = document.querySelector('input[name="answer"]') as HTMLInputElement
    answer = textAnswer.value
  } else if (currentQuestion.ui === 'tapOrdering') {
    const textAnswer = document.querySelector('input[name="answer"]') as HTMLInputElement
    answer = textAnswer.value.trim()
  } 
  else {
    answer = ''
  }
  
  if (scoring(questions[quizState.questionIndex], answer)){
    quizState.score ++
  }
  quizState.questionIndex++
  renderQuestionUI()
}

answerForm?.addEventListener('submit', handleSubmit)

renderQuestionUI()