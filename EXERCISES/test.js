let questions = [
  {
    category: "General Knowledge",
    question: "Who __ knows?",
    choices: ["i", "myself", "the fuck"],
    answer: "the fuck",
  },
  {
    category: "General Knowledge",
    question: "Whatever __ lies beyond...?",
    choices: ["duck", "muck", "the fuck"],
    answer: "the fuck",
  },
  {
    category: "General Knowledge",
    question: "Life is __.?",
    choices: ["easy", "medium", "hard"],
    answer: "hard",
  },
  {
    category: "General Knowledge",
    question: "Just keep __.?",
    choices: ["sleeping", "working", "going"],
    answer: "going",
  },
  {
    category: "General Knowledge",
    question: "I am just an __ human.?",
    choices: ["extraordinary", "godlike", "ordinary"],
    answer: "ordinary",
  },
];

function getRandomQuestion(arrOfQuestions) {
  return arrOfQuestions[Math.floor(Math.random() * arrOfQuestions.length)];
}

function getRandomComputerChoice(arrOfChoices) {
  return arrOfChoices[Math.floor(Math.random() * arrOfChoices.length)];
}

function getResults(question, chosenAnswer) {
  if (question.answer === chosenAnswer) {
    return "The computer's choice is correct!";
  }

  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}

let theQuestion = getRandomQuestion(questions);
let theChoice = getRandomComputerChoice(theQuestion.choices);
let theResult = getResults(theQuestion, theChoice);

console.log(theResult);
