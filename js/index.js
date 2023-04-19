const DATA = [
  {
    question: "ваш пол:",
    answers: [
      {
        id: "0.1",
        value: "Мужчина",
      },
      {
        id: "0.2",
        value: "Женщина",
      },
    ],
  },
  {
    question: "Укажите ваш возраст: ",
    answers: [
      {
        id: "1.1",
        value: "До 18",
      },
      {
        id: "1.2",
        value: "От 18 до 28",
      },
      {
        id: "1.3",
        value: "от 29 до 35",
      },
      {
        id: "1.4",
        value: "От 36",
      },
    ],
  },
  {
    question: "Выберите лишнее:",
    answers: [
      {
        id: "2.1",
        value: "Дом",
      },
      {
        id: "2.2",
        value: "Шалаш",
      },
      {
        id: "2.3",
        value: "Бунгало",
      },
      {
        id: "2.4",
        value: "Скамейка",
      },
      {
        id: "2.5",
        value: "Хижина",
      },
    ],
  },
];

let localResults = {};

const quiz = document.getElementById("quiz");
const indicator = document.getElementById("indicator");
const questions = document.getElementById("questions");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");

const renderQuestions = (index) => {
  renderIndicator(index + 1);

  questions.dataset.currentStep = index;

  const renderAnswers = () => {
    return DATA[index].answers
      .map((answer) => {
        return `<li class="quiz-questions-str">
            <label>
                <input class="answer-input" type="radio" name=${index} value="${answer.id}"/>${answer.value}
            </label>
        </li>`;
      })
      .join("");
  };
  questions.innerHTML = `
  <div class="quiz-questions-item">
    <div class="quiz-questions-item__question">${DATA[index].question}</div>
    <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
  </div>`;
};

const renderResults = () => {
  let content = "";

  const getAnswers = (index) => {
    return DATA[index].answers
      .map((answer) => {
        return `<li class="quiz-results-str">${answer.value}</li>`;
      })
      .join("");
  };

  DATA.forEach((question, index) => {
    content += `
    <div class="quiz-results-item">
        div class="quiz-results-item__question">${question.question}</div>
        <ul class="quiz-results-item__answers">${getAnswers[index]}</ul>
    </div>`;
  });
  results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
  indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener("change", (event) => {
  if (event.target.classList.contains("answer-input")) {
    localResults[event.target.name] = event.target.value;
    btnNext.disabled = false;
    console.log(localResults);
  }
});

btnNext.addEventListener("click", (event) => {
  if (DATA.length === Number(questions.dataset.currentStep) + 1) {
    indicator.classList.add("indicator--hidden");
    questions.classList.add("questions--hidden");
    results.classList.add("results--visible");
    btnNext.classList.add("btn-next--hidden");
    renderResults();
  } else {
    renderQuestions(Number(questions.dataset.currentStep) + 1);
  }
  btnNext.disabled = true;
});

renderQuestions(0);
