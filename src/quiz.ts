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
    // TODO....
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

const handleSubmit = (event: Event) => {
  event.preventDefault()
  // TODO: scoring
  quizState.questionIndex++
  renderQuestionUI()
}

answerForm?.addEventListener('submit', handleSubmit)

renderQuestionUI()