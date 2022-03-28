// creating an array and passing the number, questions, options, and answers

let myQuestions = [
  {
    question: "What does HTML stand for?",
    CorrectAnswer: "Hyper Text Markup Language",
    answers: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
    ],
  },
  {
    question: "What does CSS stand for?",
    correctAnswer: "Cascading Style Sheet",
    answers: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Cascading Style Sheet",
    ],
  },
  {
    question: "What does PHP stand for?",
    correctAnswer: "Hypertext Preprocessor",
    answers: [
      "Hypertext Preprocessor",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
  },
  {
    question: "What does DOM stand for?",
    correctAnswer: "Document Object Model",
    answers: [
      "Dominance Option Language",
      "Document Object Model",
      "Document Obedience Modem",
    ],
  },
];

console.log(myQuestions);

//Selecting all elements
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var informationBox = document.querySelector(".Information-Box");
var startButtonEl = document.querySelector("#start-button");
var quizBox = document.getElementById("#quiz-box");

var timer;
var time = 60;
var setTime = document.querySelector("#timer");

setTime.textContent = "Time Left: " + time;

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var userAnswer = "";
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = "red";
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);

    localStorage.setItem("myQuestions", JSON.stringify(resultsContainer));
  };
}

function startQuiz() {
  informationBox.style.display = "none";

  timer = setInterval(tickDown, 1000);
}
function tickDown() {
  time--;
  setTime.textContent = "Time Left: " + time;
  if (time <= 0) {
    endQuiz();
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

