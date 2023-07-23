const questions =[
    {
        questions: "Which is largest animal in the world?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
            

            
        ]
    },
    {
        questions: "Which is smallest country in the world?",
        answers:[
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},
            

            
        ]
    },
    {
        questions: "Which is largest desert in the world?",
        answers:[
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
            

            
        ]
    },
    {
        questions: "Which is the smallest continent in the world?",
        answers:[
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
            

            
        ]
    },
];

const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
} 

function showQuestion(){
    resetButton();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + cureentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = ocument.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

