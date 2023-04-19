const DATA = [
  {
    question: "ваш пол:",
    answers: [
      {
        id: "01",
        value: "Мужчина",
      },
      {
        id: "02",
        value: "Женщина",
      },
    ],
  },
  {
    question: "Укажите ваш возраст: ",
    answers: [
      {
        id: "11",
        value: "До 18",
      },
      {
        id: "12",
        value: "От 18 до 28",
      },
      {
        id: "13",
        value: "от 29 до 35",
      },
      {
        id: "14",
        value: "От 36",
      },
    ],
  },
  {
    question: "Выберите лишнее:",
    answers: [
      {
        id: "21",
        value: "Дом",
      },
      {
        id: "22",
        value: "Шалаш",
      },
      {
        id: "23",
        value: "Бунгало",
      },
      {
        id: "24",
        value: "Скамейка",
      },
      {
        id: "25",
        value: "Хижина",
      },
    ],
  },
];

const quiz = document.getElementById("quiz");
const indicator = document.getElementById("indicator");
const questions = document.getElementById("questions");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");

const renderQuestions = () => {};

const renderResults = () => {};

const renderIndicator = () => {};

quiz.addEventListener("change", (event) => { });

btnNext.addEventListener("click", (event) => {});
