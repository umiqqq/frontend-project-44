import { question } from '../brain-quest.js'

const prime = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let min = 1
  let max = 100

  for (let i = 0; i < 3; i += 1) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    let subAnswer = 'yes'
    let subAnswerEnd = false
    if (randomNum <= 1) {
      subAnswer = 'no'
      subAnswerEnd = true
    }

    if (subAnswerEnd === false) {
      for (let i = 2; i <= Math.sqrt(randomNum); i += 1) {
        if (randomNum % i === 0) {
          subAnswer = 'no'
          break
        }
      }
    }

    if (question(randomNum, subAnswer, name) === false) {
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export { prime }
