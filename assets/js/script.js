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
            a: "1. Douglas Crockford",
            b: "2. Brendan Eich",
            c: "3. Sheryl Sandberg",
            d: "4. Steve Jobs"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        answers: {
            a: "1. named function",
            b: "2. anonymous function",
            c: "3. both of the above",
            d: "4. none of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is not JavaScript Data Types?",
        answers: {
            a: "1. Undefined",
            b: "2. Number",
            c: "3. Boolean",
            d: "4. Float"
        },
        correctAnswer: "d"
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: {
            a: "1. <script>",
            b: "2. <head>",
            c: "3. <meta>",
            d: "4. <style>"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is not Javascript frameworks or libraries",
        answers: {
            a: "1. Polymer",
            b: "2. Meteor",
            c: "3. Cassandra",
            d: "4. jQuery"
        },
        correctAnswer: "c"
    }
];

function init() {
    let storedScores = JSON.parse(localStorage.getItem("allHighScores"));
    if (storedScores !== null){
        allHighScores=storedScores;
    }
}
// add event listener to start button to start quiz
startEl.addEventListener("click",function(){
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
        setTimeout(function(){
            startBoxEl.textContent="";
            startBoxEl.style.borderTop="none";
        },1500);
        if(usedQs.length<5){
            chooseQuestion();
        }else{
            gameOver=true;
        }
    }
})
// select a random question and check to make sure it hasn't been used it.
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
// Display new question on screen
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
        if(secondsLeft===0 || gameOver) {
            clearInterval(timerInterval);
            highScore();
        }
    },1000);
}
// create elements for entering high score
let highScoreContainer = document.createElement('div');
let highScoreLabelEl = document.createElement("label");
let highScoreEl = document.createElement("input");
let highScorebtnEl = document.createElement("a");
let allHighScores=[];

// Label elements for high score
highScoreLabelEl.textContent="Enter Initials";
highScorebtnEl.textContent="Submit";
highScorebtnEl.href="HighScores.html";

// append high score elements to a div
highScoreContainer.appendChild(highScoreLabelEl);
highScoreContainer.appendChild(highScoreEl);
highScoreContainer.appendChild(highScorebtnEl);

// Ask user for initials 
function highScore(){
    questionEl.textContent="All Done";
    choicesEl.textContent= "Your final score is " + secondsLeft;
    choicesEl.appendChild(highScoreContainer);
}

// listen for user to submit high score
highScoreContainer.addEventListener('click', function(event){
    event.stopPropagation();
    let element = event.target;
    if(element.matches("a")===true){
    let submitHighScore ={
        initials: highScoreEl.value,
        score: secondsLeft
    };
    allHighScores.push(submitHighScore);
    storeHighScore();
    }
})
// sorts high scores from highest to lowest
function compare(a,b){
    let comparison =0;
    if(a.score>b.score){
        comparison = -1;
    }else if (a.score<b.score){
        comparison = 1;
    }
    return comparison;
}
// sort high scores and store them
function storeHighScore() {
    allHighScores.sort(compare);
    localStorage.setItem("allHighScores",JSON.stringify(allHighScores));

}
init();

// use local storage to rank high scores. Go to highscore page.

// add event listener for go back button
    // goes back to initial page

// add event listener for clear button
    // clear the local storage of high scores
