export type QuestionType = 'multipleChoice' | 'textInput' | 'tapOrdering'

export type BaseQuestion = {
  questionText: string
  answer: string
  type: QuestionType
}

export type TextInputQuestion = BaseQuestion & {
  type: 'textInput'
}

export type MultipleChoiceQuestion = BaseQuestion & {
  choices: string[]
  type: 'multipleChoice'
}

export type TapOrderingQuestion = BaseQuestion & {
  choices: string[]
  type: 'tapOrdering'
}

export type Question = TextInputQuestion | MultipleChoiceQuestion | TapOrderingQuestion