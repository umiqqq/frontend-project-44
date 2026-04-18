import readlineSync from 'readline-sync'

const question = (question, correctAns, name) => {
  console.log(`Question: ${question}`)
  const answer1 = readlineSync.question('Your answer: ')
  if (answer1 === correctAns) {
    console.log('Correct!')
  }
  else {
    console.log(
      `'${answer1}'`,
      `is wrong answer ;(. Correct answer was '${correctAns}'.`,
    )
    console.log(`Let's try again, ${name}!`)
    return false
  }
}

export { question }
