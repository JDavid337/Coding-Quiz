const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('info_box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .restart');
const quiz_box = info_box.querySelector(".quiz_box")

const option_list = document.querySelector(".option_list");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.remove("activeQuiz"); // show the quiz box
    showQuestions(4);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz-quiz_box.querySelector(".next_btn");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
    que_count++;
    que_count++;
    showQuestions(que_count);
    queCounter(que_numb);
    }else{
    console.log("Questions completed");
    }
}


function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].questions + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = 'div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = 'div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct");
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is wrong");
    }
}

for (let i = 0; i < allOptions; i++){
    if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class", "option correct");
        }
    }
}


for (let i = 0; i < allOptions; ii++) {
    options_list.children[i].classList.add("disabled");
}



function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

const bottom_ques_counter = quiz_box.querySelector(".total_que");
let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>' + '</p>Questions</span';

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