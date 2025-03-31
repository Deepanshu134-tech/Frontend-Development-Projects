const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Stephen King"],
    answer: "Harper Lee",
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
  const question = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <div class="question">
      <h2>${question.question}</h2>
      <div class="options">
        ${question.options
          .map(
            (option) => `
          <div class="option ${
            selectedOption === option ? "selected" : ""
          }" onclick="selectOption('${option}')">
            ${option}
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
  updateNavigation();
}

function selectOption(option) {
  selectedOption = option;
  const options = document.querySelectorAll(".option");
  options.forEach((opt) => {
    opt.classList.remove("selected");
    if (opt.textContent === option) {
      opt.classList.add("selected");
    }
  });
  nextBtn.disabled = false;
}

function updateNavigation() {
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = selectedOption === null;
  if (currentQuestion === quizData.length - 1) {
    nextBtn.textContent = "Submit";
  } else {
    nextBtn.textContent = "Next";
  }
}

nextBtn.addEventListener("click", () => {
  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }
  selectedOption = null;
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

prevBtn.addEventListener("click", () => {
  currentQuestion--;
  loadQuestion();
});

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.textContent = `${score} / ${quizData.length}`;
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  selectedOption = null;
  quizContainer.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  loadQuestion();
});

loadQuestion();