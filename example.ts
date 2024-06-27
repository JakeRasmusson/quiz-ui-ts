let num: number = 123
let myName: string = 'Josh'
let myBoolean: boolean = true
let myUndefined: undefined
let myNumArray: number[] = [1,2,3]

type Color = 'black' | 'brown' | 'grey' | 'white' | 'blue'

type Dog = {
  name: string
  age: number
  colors: Color[]
  favToy?: string
}

const dog: Dog = {
  name: 'Josh',
  age: 10,
  colors: ['black', 'brown']
}

const greetNtimes = (n: number, message: string): boolean => {
  for (let i = 0; i < n; i++) {
    console.log(i, message)
  } 

  return true
}

const n = greetNtimes(10, 'Hello')


