// Answers
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let optionElements = document.querySelectorAll(".option");

// Modal answers
let correctAnswer = document.querySelector(".correct-answer");

// Quiz over modal
let quizOverModal = document.querySelector(".quiz-over-modal");

// Number of all questions modal
let numOfAllQuestionModal = document.querySelector(".number-of-all-question-modal");

// Question
let question = document.querySelector(".question");

// Number of question, number of all questions
let numOfQuestion = document.querySelector(".number-of-question");
let numOfAllQuestion = document.querySelector(".number-of-all-questions");

// Next button
let btnNext = document.querySelector(".btn-next");

// Answer circles
let answerCircles = document.querySelector(".answer-circles");

// Индекс текущего вопроса
let indexOfQuestion;

// Индекс страницы
let indexOfPage = 0;

// Счёт
let score = 0;

// Try again
let btnTryAgain = document.querySelector(".try-again");

const questions = [
    {
        question: "Сколько будет '12' + 5",
        options: ["125", "17", "NaN", "underfined"],
        correctAnswer: 0
    },
    {
        question: "Что означает '||'",
        options: ["Знак ошыбки", "Так называемое 'или'", "Так называемое 'и'", "Такго не существует"],
        correctAnswer: 1
    },
    {
        question: "Сколько будет '1000' - 7",
        options: ["null", "NaN", "underfined", "993"],
        correctAnswer: 3
    },
    {
        question: "Какая разница между 'null' и 'underfined'",
        options: ["Никакой", "Null-это примитивный тип а underfined нет", "'Null'-значение не определенный а 'Underfined'-неопределенный", "Underfined-это примитивный тип а null нет"],
        correctAnswer: 2
    }
];

numOfAllQuestion.textContent = questions.length;

const load = () => {
    question.textContent = questions[indexOfQuestion].question;

    option1.textContent = questions[indexOfQuestion].options[0];
    option2.textContent = questions[indexOfQuestion].options[1];
    option3.textContent = questions[indexOfQuestion].options[2];
    option4.textContent = questions[indexOfQuestion].options[3];

    numOfQuestion.textContent = indexOfPage+1;
    indexOfPage++;
};

let comletedAnswers = [];

const randomQuestion = () => {
    let randomNum = Math.floor(Math.random() * questions.length);
    let flug = false;

    if (indexOfPage == questions.length) {
        over();
    } else {
        if (comletedAnswers.length > 0) {
            comletedAnswers.forEach(item => {
                if (item == randomNum) {
                    flug = true;
                }
            });
            if (flug) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNum;
                load();
            }
        }
        if (comletedAnswers.length == 0) {
            indexOfQuestion = randomNum;
            load();
        }
    }
    comletedAnswers.push(indexOfQuestion);
};

const createCircles = () => {
    for (let i = 0; i < questions.length; i++) {
        let div = document.createElement("div");
        div.classList.add("noColor");
        answerCircles.append(div);
    };
};

const disabledOptions = () => {
    optionElements.forEach(elem => {
        elem.classList.add("disabled");
    });
};

const coloredCircles = (status) => {
    let circle = answerCircles.querySelector(".noColor");
    circle.classList.add(status);
    circle.classList.remove("noColor");
}

const checkAnswer = (elem) => {
    if (elem.target.dataset.id == questions[indexOfQuestion].correctAnswer) {
        elem.target.classList.add("correct");
        score++;
        coloredCircles("correct");
    }
    if (elem.target.dataset.id != questions[indexOfQuestion].correctAnswer) {
        elem.target.classList.add("wrong");
        optionElements.forEach(elem => {
            if (elem.dataset.id == questions[indexOfQuestion].correctAnswer) {
                elem.classList.add("correct");
            }
        });
        coloredCircles("wrong");
    }
    disabledOptions();
};

const anabledOption = () => {
    optionElements.forEach(elem => {
        elem.classList.remove("disabled", "correct", "wrong");
    });
};

const validate = () => {
    if (!option1.classList.contains("disabled")) {
        alert("Выберите ответ!");
    } else {
        randomQuestion();
        anabledOption();
    }
};

const over = () => {
    quizOverModal.classList.add("flex");

    correctAnswer.textContent = score;

    numOfAllQuestionModal.textContent = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

optionElements.forEach(element => {
    element.addEventListener("click" , (e) => {
        checkAnswer(e);
    })
});

window.addEventListener("load", () => {
    randomQuestion();  
    createCircles();
});

btnNext.addEventListener("click", () => {
    validate();
});

btnTryAgain.addEventListener("click", () => {
    tryAgain();
});