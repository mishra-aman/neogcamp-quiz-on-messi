const chalk = require("chalk");
const log = console.log;
var readlineSync = require("readline-sync");
var score = 0;

var highScores = [
  {
    name: "Aman",
    score: 5,
  },
  {
    name: "Piyush",
    score: 3,
  },
];

var questions = [
  {
    question:
      "When did Messi play his final football match for club Barcelona?",
    answer: "16 May 2021",
  },
  {
    question: "How many goals did Messi score in world cup 2014?",
    answer: "Four",
  },
  {
    question: "What deficiency was Messi diagnosed with?",
    answer: "Growth Hormone Deficiency",
  },
  {
    question: "What is the worth of the insurance of Messi's left leg?",
    answer: "$900 million",
  },
  {
    question: "How many Ballon d'Or has been won by Messi?",
    answer: "Seven",
  },
];

function welcomeUser() {
  var userName = readlineSync.question("What is your name?");
  log(
    chalk.blue("Welcome " + userName + " to how much do you know Messi Quiz")
  );
}

//playGame function

function playGame(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    log(chalk.green("Sweeeet " + " It's a goaaal " + "⚽️"));
    score++;
  } else {
    log(chalk.red("Watch football"));
    score--;
  }

  console.log("current score: ", score);
  console.log("-------------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    playGame(questions[i].question, questions[i].answer);
  }
}

function getHighScore() {
  console.log("Olaaa! You SCORED: ", score);

  console.log(
    "Check out the high scores, if you should be there then me and I'll update the scoreboard"
  );
  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcomeUser();
game();
getHighScore();
