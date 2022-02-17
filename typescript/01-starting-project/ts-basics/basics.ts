// primitives ---- number, string, boolean
// more complex types ----- arrays, objects
// Functios types, parameters

// Primitives

let a: number

a = 12 // correct
// a = '12' // incorrect

let userName: string
userName = 'Alok'

let isNumber: boolean

isNumber = false

// More complex :
// Arrays

let flavours: string[]

flavours = ['Vanilla', 'Chocolate']

// object with following type
// let person : {};  // OR

let person: {
  name: string
  age: number
}

person = {
  name: 'Abc',
  age: 22,
}

// Also forarray of objects

let people: {
  name: string
  age: number
}[]

// Type inference

let course = 'It is a react course'

// Above is of string type and hence we can't assign it with another type ahead

// course = 12345

// ****** Union type /// defining multiple type on a variable

let course2: number | string | boolean = 'It is a react course'

course2 = 4500

// Type alias -- using same  object with different types without repetitions of defining objects again and again

type Person = {
  name: string
  age: number
  address: string
}

let person1: Person

person1 = {
  name: 'abc',
  age: 22,
  address: 'xxx',
}

let people1: Person[]

// functions and types

function add2(a: number, b: number) {
  return a + b
}

// Generics

function insertArrayatBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertArrayatBeginning(demoArray, -1) // <T> will referred as number
const stringArray = insertArrayatBeginning(['a', 'abc', 'xyz', 'xxx'], 'hello') // <T> will referred as string
