let questions = [
  {
    category: "unknown",
    question: "Who __ knows?",
    choices: ["i", "myself", "me"],
    answer: "the fuck",
  },
  {
    category: "unknown",
    question: "Whatever __ lies beyond...?",
    choices: ["duck", "muck", "hell"],
    answer: "the fuck",
  },
  {
    category: "unknown",
    question: "Life is __.?",
    choices: ["easy", "medium", "normal"],
    answer: "hard",
  },
  {
    category: "unknown",
    question: "Just keep __.?",
    choices: ["sleeping", "working", "running"],
    answer: "going",
  },
  {
    category: "unkown",
    question: "i am just an __ human.?",
    choices: ["extraordinary", "godlike", "unlikely"],
    answer: "ordinary",
  },
];

function appendChoices(arrOfChoices, answer) {
  arrOfChoices.push(answer);
}

// appendChoices(questions[0].choices, questions[0].answer);
// appendChoices(questions[1].choices, questions[1].answer);
// appendChoices(questions[2].choices, questions[2].answer);
// appendChoices(questions[3].choices, questions[3].answer);
// appendChoices(questions[4].choices, questions[4].answer);

function getRandomQuestion(arrOfQuestions) {
  let aQuestionBe =
    arrOfQuestions[Math.floor(Math.random() * arrOfQuestions.length)];
  return aQuestionBe;
}

function getRandomComputerChoice(arrOfChoices) {
  let aChoiceBe = arrOfChoices[Math.floor(Math.random() * arrOfChoices.length)];
  return aChoiceBe;
}

function getResults(question, chosenAnswer) {
  if (question.answer === chosenAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

let theQuestion = getRandomQuestion(questions);
appendChoices(theQuestion.choices, theQuestion.answer);
let theChoice = getRandomComputerChoice(theQuestion.choices);
let theResult = getResults(theQuestion, theChoice);
// console.log(theQuestion);
// console.log(theChoice);
console.log(theResult);
