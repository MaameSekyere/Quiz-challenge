// creating an array and passing the number, questions, options, and answers

let questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    question: "What does DOM stand for?",
    answer: "Document Object Model",
    options: [
      "Dominance Option Language",
      "Document Object Model",
      "Drama Object Memory",
      "Document Obedience Modem",
    ],
  },
  {
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
];

console.log(questions);

//Selecting all elements
var startButtonEl = document.getElementById("start-button");
var exitButtonEl = document.getElementById("#exit-button");
var restartButtonEl = document.querySelector("#restart-button");
var quitButtonEl = document.querySelector("#quit-button");
var quizBoxEl = document.querySelector("#quiz-box");
var optionListEl = document.querySelector("#option-list");
//var options = document.createElement("p");
var informationBox = document.querySelector(".Information-Box");
var resultBox = document.querySelector(".result-box");
var highscoreEl = document.querySelector(".setHighscore");

var mainQuestion = document.querySelector("#main-question");
mainQuestion.innerHTML = "";
var timer;
var time = 60;
var setTime = document.querySelector("#timer");

setTime.textContent = "Time Left: " + time;

function startQuiz() {
  // Loop through questions
  informationBox.style.display = "none";
  resultBox.style.display = "none";
  highscoreEl.style.display = "none";

  timer = setInterval(tickDown, 1000);
}

function tickDown() {
  time--;
  setTime.textContent = "Time Left: " + time;
  if (time <= 0) {
    endQuiz();
  }
}
function getQuestions() {
  // for loop to loop through each questions

  for (let i = 0; i < questions.length; i++) {
    // display questions and options onto page by targeting the html elements in HTML  (main-question, option-list)
    //make the options clickable so we can store the data
    var a1 = (options.textContent = questions[i].options[0]);
    var a2 = (options.textContent = questions[i].options[1]);
    var a3 = (options.textContent = questions[i].options[2]);
    var a4 = (options.textContent = questions[i].options[3]);
    a1.setAttribute("value", questions[i].options[0]);
    a2.setAttribute("value", questions[i].options[1]);
    a3.setAttribute("value", questions[i].options[2]);
    a4.setAttribute("value", questions[i].options[3]);
    a1.append(optionListEl);
    a2.append(optionListEl);
    a3.append(optionListEl);
    a4.append(optionListEl);

    //if this.value is not1 the same as questions[i].answer
    // Penalized the time
    // when the loop ends or when the time runs out endQuiz
    console.log(questions[i].answer);

    //   if (this.value !== questions[i].answer) {
    // time -=10
    if (this.value !== questions[0].answer) {
      console.log("wrong");

      getQuestions();
    }
  }
}

function endQuiz() {
  clearInterval(timer);
  //hide everything
  //show setHighscore page
  //set Highscore page is going to have a input for a user to enter their name
  //A submit button to store it into local storage
  // Once they click submit, it will send them to the highscore page
}
startButtonEl.onclick = startQuiz;

//when the submit button for the highscore is clicked, take the user to the highscore html page
