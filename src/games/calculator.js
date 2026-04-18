import { question } from '../brain-quest.js'

const calculator = (name) => {
  console.log('What is the result of the expression?')

  let maxSign = 10
  let min = 1
  let max = 100

  for (let i = 0; i < 3; i += 1) {
    let sign = Math.floor(Math.random() * maxSign - 1)
    let randomNumOne = Math.floor(Math.random() * (max - min + 1)) + min
    let randomNumTwo = Math.floor(Math.random() * (max - min + 1)) + min
    let answer

    if (sign <= 2) {
      sign = '*'
      answer = randomNumOne * randomNumTwo
    }
    else if (2 < sign && sign <= 5) {
      sign = '+'
      answer = randomNumOne + randomNumTwo
    }
    else if (5 < sign && sign <= 8) {
      sign = '-'
      answer = randomNumOne - randomNumTwo
    }

    if (
      question(`${randomNumOne} ${sign} ${randomNumTwo}`, `${answer}`, name) === false
    ) {
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export { calculator }