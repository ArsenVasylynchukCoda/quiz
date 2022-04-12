// Answers
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let optionElements = document.querySelectorAll(".option");

// Question
let question = document.querySelector(".question");

// Number of question, number of all questions
let numOffQuestion = document.querySelector(".number-off-question");
let numOffAllQuestion = document.querySelector(".number-off-all-questions");

// Next button
let btnNext = document.querySelector(".btn-next");

// Answer circles
let answerCircles = document.querySelector(".answer-circles");

const questions = [
    {
        question: "Сколько будет '12' + 5",
        options: ["125", "17", "NaN", "underfined"],
        correctAnswer: 0
    }
];