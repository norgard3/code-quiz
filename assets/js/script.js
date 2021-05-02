let questionEl = document.querySelector("#question");
let choicesEl = document.querySelector("#choices");
let startEl = document.querySelector("#start");
let timerEl = document.querySelector("#countdown");
let secondsLeft=20;
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
    let remainingQuestions=5;
    // start timer
    countDown();
    // load the first question and possible answers
    loadQuestion();
    

});
function loadQuestion(){
    questionEl.textContent=myQuestion[0].question;
    choicesEl.textContent="";
    // choicesEl.appendChild(document.createElement("ol"));
    // choicesEl.document.createElement("li");
    // choicesEl.document.createElement("li");
    // choicesEl.document.createElement("li");
    // choicesEl.document.createElement("li");
}
// starts countdown, displays timer, and clears interval
function countDown(){
    let timerInterval=setInterval(function(){
        secondsLeft--;
        timerEl.textContent="time: " + secondsLeft;

        if(secondsLeft===0) {
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
