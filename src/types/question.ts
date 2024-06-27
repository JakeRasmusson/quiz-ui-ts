export type QuestionUI = 'multipleChoice' | 'textInput' | 'tapOrdering'

export type BaseQuestion = {
  questionText: string
  answer: string
  ui: QuestionUI
}

export type TextInputQuestion = BaseQuestion & {
  ui: 'textInput'
}

export type MultipleChoiceQuestion = BaseQuestion & {
  choices: string[]
  ui: 'multipleChoice'
}

export type TapOrderingQuestion = BaseQuestion & {
  choices: string[]
  ui: 'tapOrdering'
}

export type Question = TextInputQuestion | MultipleChoiceQuestion | TapOrderingQuestion