let questionEl = document.querySelector("#question");
let choicesEl = document.querySelector("#choices");
let answersEl = document.querySelector("#answers");
let startEl = document.querySelector("#start");
let timerEl = document.querySelector("#countdown");
let secondsLeft=20;
let remainingQuestions;
let correctResponse="";
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
    remainingQuestions=5;
    // start timer
    countDown();
    // load the first question and possible answers
    loadQuestion();
});
choicesEl.addEventListener("click", function(event){
    let element = event.target;
    if(element.matches("button")===true){
        let userAnswer = element.getAttribute("answer-options");
        if(userAnswer===correctResponse){
            questionEl.textContent="Correct"
        }else{
            questionEl.textContent="Wrong"
        }

    }
})
function loadQuestion(){
    questionEl.textContent=myQuestion[0].question;
    startEl.textContent="";
    answersEl.textContent="";
    correctResponse=myQuestion[0].correctAnswer;
    for(i=0; i<4; i++){
        let index = ["a", "b", "c", "d"];
        let button=document.createElement("button");
        button.textContent=myQuestion[0].answers[index[i]];
        button.setAttribute("answer-options", index[i]);
        choicesEl.appendChild(button);
    }
    
   
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
answersEl.addEventListener("click", function(event){
    let element=event.target;
    if(element.matches("li")){
        let x = element.getAttribute("answer-id");
        console.log(x);
    }
})
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
