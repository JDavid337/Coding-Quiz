const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('info_box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .restart');
const quiz_box = info_box.querySelector(".quiz_box")

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.remove("activeQuiz"); // show the quiz box

let que_count = 0;


function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}

/*

function buildQuiz(){}

function showResults(){}

//immediately display quiz
buildQuiz();

//once submitted, display results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
    question: "Who invented JavaScript?",
    answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
    },
        correctAnswer: "c"
    },  
    {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
    },
        correctAnswer: "c"
    },
    {
    question: "Which tool can you use to ensure code quality?",
    answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
        },
        correctAnswer: "d"
    }
    ];

    function buildQuiz(){
        // variable to store the HTML output
        const output = [];
    
        // for each question...
        myQuestions.forEach(
        (currentQuestion, questionNumber) => {