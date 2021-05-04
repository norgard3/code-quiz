let questionEl = document.querySelector("#question");
let choicesEl = document.querySelector("#choices");
let answersEl = document.querySelector("#answers");
let startBoxEl = document.querySelector("#start-box");
let startEl = document.querySelector("#start");
let timerEl = document.querySelector("#countdown");
let secondsLeft=76;
let gameOver=false
let correctResponse="";
let usedQs=[];
const myQuestion=[
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Brendan Eich",
            c: "Sheryl Sandberg",
            d: "Steve Jobs"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is a valid type of function javascript supports",
        answers: {
            a: "named function",
            b: "anonymous function",
            c: "both of the above",
            d: "none of the above"
        },
        correctAnswer: "c"
    }
];

// add event listener to start button to start quiz
startEl.addEventListener("click", function(){
    // start timer
    countDown();
    // choose and load the first question and possible answers
    chooseQuestion();
});
// listen for an answer button to be clicked.
choicesEl.addEventListener("click", function(event){
    let element = event.target;
    if(element.matches("button")===true){
        let userAnswer = element.getAttribute("answer-options");
        startBoxEl.style.borderTop="1px solid #000";
        if(userAnswer===correctResponse){
            startBoxEl.textContent="Correct!";
        }else{
            startBoxEl.textContent="Wrong!";
            secondsLeft -= 15;
        }
        if(usedQs.length<2){
            chooseQuestion();
        }else{
            // run highscore function
            gameOver=true;
        }
    }
})
function chooseQuestion(){
    let shuffleQs = Math.floor(Math.random()*myQuestion.length);
    if(usedQs.includes(shuffleQs)){
        chooseQuestion();
    }
    else{
        usedQs.push(shuffleQs);
        loadQuestion(shuffleQs);
    }
}
function loadQuestion(q){
    
    questionEl.textContent=myQuestion[q].question;
    choicesEl.textContent="";
    startEl.textContent="";
    correctResponse=myQuestion[q].correctAnswer;
    for(i=0; i<4; i++){
        let index = ["a", "b", "c", "d"];
        let button=document.createElement("button");
        button.textContent=myQuestion[q].answers[index[i]];
        button.setAttribute("answer-options", index[i]);
        choicesEl.appendChild(button);
    }
    
   
}
// starts countdown, displays timer, and clears interval
function countDown(){
    let timerInterval=setInterval(function(){
        secondsLeft--;
        timerEl.textContent="time: " + secondsLeft;
        startBoxEl.textContent="";
        startBoxEl.style.borderTop="none";
        if(secondsLeft===0 || gameOver) {
            clearInterval(timerInterval);
            // run our highscore function
        }
    },1000);
}

// once answer is selected check if it is right.
    // if right, move onto next question & display correct.
    // if wrong, deduct time from timer, display wrong, move onto next question
    // check to see how many questions have been asked

// once all questions are answered stop timer, take score from timer.  ask for initials.  Display a submit box.

// use local storage to rank high scores. Go to highscore page.

// add event listener for go back button
    // goes back to initial page

// add event listener for clear button
    // clear the local storage of high scores
