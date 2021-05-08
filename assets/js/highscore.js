let clearEl = document.querySelector("#clear");
let rankedScoresEl = document.querySelector("#rankedScores");
let allHighScores=[];

function init() {
    let storedScores = JSON.parse(localStorage.getItem("allHighScores"));
    if (storedScores !== null){
        allHighScores=storedScores;
    }
    renderHighScores();
}

function renderHighScores(){
    // clear the list of rankings
    rankedScoresEl.innerHTML="";
    // creates and displays an ordered list of highscores
    for(let i=0; i<allHighScores.length; i++){
        let score=allHighScores[i].score;
        let name=allHighScores[i].initials;

        let li = document.createElement("li");
        li.textContent=name + " - " + score;
        rankedScoresEl.appendChild(li);
    }
}
// listens for clear button and clears all highscores
    clearEl.addEventListener('click', function(){
    allHighScores=[];
    rankedScoresEl.innerHTML="";
    localStorage.setItem("allHighScores",JSON.stringify(allHighScores));
});

init();