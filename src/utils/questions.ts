import { Question } from "../types"

export const questions: Question[] = [
  {
    questionText: 'What is the keyword to define a custom type in Typescript?',
    answer: 'type',
    choices: ['const', 'let', 'type', 'var'],
    ui: 'multipleChoice',
  },
  {
    questionText: 'What is the extension for a Typescript file? .__',
    answer: 'ts',
    ui: 'textInput'
  },
  {
    questionText: 'Put the follow code in the correct order',
    answer: 'type num: number = 10',
    choices: ['= 10', 'number', 'num:', 'type'],
    ui: 'tapOrdering'
  }
]