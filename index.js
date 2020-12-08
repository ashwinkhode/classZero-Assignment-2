//dependencies
const rs = require('readline-sync')
const chalk = require('chalk')

const userName = rs.question(chalk.bgCyan('Enter your name\n'))
console.log(chalk.green(`${userName}, Welcome to the Ultimate Dragon Ball Quiz`))

//global variable
let score = 0

//List of questions
const questions = [
  {
    question: `What is Goku's signature attack?`,
    options: 'A)Dragon ball power B)Kamehameha C)Go ninja',
    answer: 'B'
  },
  {
    question: `What is the name of Master Roshi's school?`,
    options: 'A)Tortoise B)Crab C)Turtle',
    answer: 'C'
  },
  {
    question: `How many episodes of Dragon Ball Z have there been?`,
    options: 'A)291 B)101 C)351',
    answer: 'A'
  },
  {
    question: `Who is Frieza's student?`,
    options: 'A)Freeze B)Chill C)Frost',
    answer: 'C'
  },
  {
    question: `Who is Trunks?`,
    options: `A)Vegeta's son B)Goku's son C)Goku's brother`,
    answer: 'A'
  }
]

//Function for starting the quiz
function quizStart() {
  const ready = rs.question(chalk.bgRed('Are you ready to start the quiz?(Y/N)\n'))

  if(ready.toUpperCase() === 'Y') {
    for(let i=0; i<questions.length; i++){
      quizPlay(questions[i])
    }
  }else{
    console.log(chalk.bgGreen('Thank You!'))
  }

  console.log(chalk.bgWhite.black('Your final score is '+score))
  console.log(chalk.red('Thank you for taking this quiz'))
}

//Function that asks questions
function quizPlay(askQue) {
  console.log('Que: '+ chalk.yellow(askQue.question))
  console.log(askQue.options)
  const userAnswer = rs.question(chalk.cyan('Your response: '))

  if(userAnswer.toUpperCase() === askQue.answer.toUpperCase()){
    score++;
    console.log(chalk.green('Correct! your current score is ' + score + '\n'))
  }else{
    console.log(chalk.red('Wrong Answer! Correct option is '+ askQue.answer + '\n'))
  }
}

//Function call
quizStart();