import { question } from '../brain-quest.js'

const findNod = (a, b) => {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

const gcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  let min = 1
  let max = 100

  for (let i = 0; i < 3; i += 1) {
    let randomNumOne = Math.floor(Math.random() * (max - min + 1)) + min
    let randomNumTwo = Math.floor(Math.random() * (max - min + 1)) + min
    const answer = findNod(randomNumOne, randomNumTwo)

    if (
      question(`${randomNumOne} ${randomNumTwo}`, `${answer}`, name) === false
    ) {
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export { gcd }
