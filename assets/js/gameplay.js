var easyAnagrams;
var mediumAnagrams;
var hardAnagrams;
const anagramElement = document.getElementById('anagram');
const clueElement = document.getElementById('clue');
const timeLeftDisplay = document.querySelector('#timer');
const timer = document.getElementById('timer');
var shuffledAnagrams, currentAnagramIndex;
var anagramCount = 0;
var score = 0;
var anagramAnswer = document.getElementById('answer');
var timeLeft = 30;
var answerButtonClicked = false;
var correctAnswers = 0;
var anagram ;
var answer;
var indexAnagram;

$(document).ready(function() {

    // This is to transition to the gameplay screen and start the game"
    $('#start-btn').click(function() {
        $(".anagram-nav").addClass("hide");
        $(".gameplay-screen").addClass("reveal");
        startGame();
    }); 

    // This is to transition back to the Anagram Atlantis navigation screen and reset the timer
    $('.home-btn').click(function() {
        $(".anagram-nav").removeClass("hide");
        $(".gameplay-screen").removeClass("reveal");
    });

    // This to restart the game
   $('.restart-btn').click(function() {
        document.getElementById("game-over-modal").classList.remove("reveal");
        timer.classList.remove("red-timer");
        timer.classList.remove("yellow-timer");
        timer.classList.add("green-timer");
        score = 0;
        anagramCount = 0;
        startGame();
        clearInterval(timeLeft = 30);
    }); 

 

});

// required functions is a way to keep shuffling through the anagrams and then to stop after 10 and trigger the game-over-modal which will display the final score

function startGame() {

    easyAnagrams = [
    {answer: "calm", clue: "peace"},
    {answer: "lantern", clue: "guiding light"},
    {answer: "blemish", clue: "imperfection"},
    {answer: "divine", clue: "holy"},
    {answer: "emotion", clue: "feelings"},
    {answer: "rotation", clue: "circular"},
    {answer: "karma", clue: "what comes around goes around"},
    {answer: "revenge", clue: "payback"},
    {answer: "shipwreck", clue: "the Titanic"},
    {answer: "poetry", clue: "... in motion"}];

    mediumAnagrams = [
    {answer: "rejoice", clue: "celebrate"},
    {answer: "elevate", clue: "higher"},
    {answer: "invulnerable", clue: "can't be hurt"},
    {answer: "liberty", clue: "freedom"},
    {answer: "scarce", clue: "hard to find"},
    {answer: "zealot", clue: "a true fanatic"},
    {answer: "heretic", clue: "a blasphemous person"},
    {answer: "subordinate", clue: "member of the rank and file"},
    {answer: "citadel", clue: "fortress"},
    {answer: "paramount", clue: "important"}];

    hardAnagrams = [
    {answer: "tyrannical", clue: "oppressive"},
    {answer: "meticulous", clue: "in great detail"},
    {answer: "miniscule", clue: "tiny"},
    {answer: "flagrant", clue: "brazen wrongdoing"},
    {answer: "juxtapostion", clue: "side by side comparison"},
    {answer: "paradox", clue: "a contradiction"},
    {answer: "philanthropic", clue: "charitable intentions"},
    {answer: "impervious", clue: "no entry"},
    {answer: "emphatic", clue: "forceful"},
    {answer: "prehistoric", clue: "time of the dinosaurs"}];
    
    anagramCount = 0;
    clearInterval(timeLeft = 30);
    timer.classList.remove("red-timer");
    timer.classList.remove("yellow-timer");
    timer.classList.add("green-timer");

    // on easy mode I want to shuffle through the easyAnagrams object take out the answer and use function to scramble the word to make the anagram
    if (sessionStorage.getItem("gamemode") === "easy") {
    indexAnagram = [Math.floor(Math.random()*easyAnagrams.length)];
    shuffledAnagrams = easyAnagrams[indexAnagram];
    easyAnagrams.splice(indexAnagram,1);
    anagram = createAnagram(shuffledAnagrams.answer);
    answer = shuffledAnagrams.answer;
    showAnagram(anagram, shuffledAnagrams.clue);
    

    // on medium mode I want to shuffle through the mediumAnagrams object
    } else if (sessionStorage.getItem("gamemode") === "medium") {
        indexAnagram = [Math.floor(Math.random()*mediumAnagrams.length)];
        shuffledAnagrams = mediumAnagrams[indexAnagram];
        mediumAnagrams.splice(indexAnagram,1);
        anagram = createAnagram(shuffledAnagrams.answer);
        answer = shuffledAnagrams.answer;
        showAnagram(anagram, shuffledAnagrams.clue);

    // when it's neither on easy or medium I want to shuffle through the hardAnagrams object
    } else {
        indexAnagram = [Math.floor(Math.random()*hardAnagrams.length)];
        shuffledAnagrams = hardAnagrams[indexAnagram];
        hardAnagrams.splice(indexAnagram,1);
        anagram = createAnagram(shuffledAnagrams.answer)
        answer = shuffledAnagrams.answer;
        showAnagram(anagram, shuffledAnagrams.clue);
} anagramCount +=1;
}


function nextAnagram() {

    //the purpose of this function is to show the next Anagram
    answerButtonClicked = false;

    // on easy mode I want to shuffle through the easyAnagrams object take out the answer and use function to scramble the word to make the anagram
    if (sessionStorage.getItem("gamemode") === "easy") {
    indexAnagram = [Math.floor(Math.random()*easyAnagrams.length)];
    shuffledAnagrams = easyAnagrams[indexAnagram];
    easyAnagrams.splice(indexAnagram,1);
    anagram = createAnagram(shuffledAnagrams.answer);
    answer = shuffledAnagrams.answer;
    showAnagram(anagram, shuffledAnagrams.clue);
    

    // on medium mode I want to shuffle through the mediumAnagrams object
    } else if (sessionStorage.getItem("gamemode") === "medium") {
        indexAnagram = [Math.floor(Math.random()*mediumAnagrams.length)];
        shuffledAnagrams = mediumAnagrams[indexAnagram];
        mediumAnagrams.splice(indexAnagram,1);
        anagram = createAnagram(shuffledAnagrams.answer);
        answer = shuffledAnagrams.answer;
        showAnagram(anagram, shuffledAnagrams.clue);

    // when it's neither on easy or medium I want to shuffle through the hardAnagrams object
    } else {
        indexAnagram = [Math.floor(Math.random()*hardAnagrams.length)];
        shuffledAnagrams = hardAnagrams[indexAnagram];
        hardAnagrams.splice(indexAnagram,1);
        anagram = createAnagram(shuffledAnagrams.answer);
        answer = shuffledAnagrams.answer;
        showAnagram(anagram, shuffledAnagrams.clue);
    }
    anagramCount +=1;
    console.log(anagramCount);
}

function showAnagram(anagram, clue) {

    // this function is to show the anagram in the related div
    anagramElement.innerText = anagram;
    clueElement.innerText = clue;
    
}


function createAnagram(answer) {

    // this function is to create an anagram out of the object
    function getRandomInt(n) {
        return Math.floor(Math.random() * n);
    }

    var newAnagram = answer.split('');

    var n = newAnagram.length;

    for(var i = 0; i < n-1; ++i) {
        var j = getRandomInt(n);

        var temp = newAnagram[i];
        newAnagram[i] = newAnagram[j];
        newAnagram[j] = temp;
    }
    s = newAnagram.join('');
    return s;
}



    // this function is to start a countdown timer and display the time left in the related div
var countdownTimer = setInterval(function() {

    console.log(timeLeft);
    timeLeftDisplay.innerText = timeLeft;

    if(timeLeft <=0) {
    clearInterval(timeLeft = 30);
    timer.classList.remove("red-timer");
    timer.classList.remove("yellow-timer");
    timer.classList.add("green-timer");
    if (anagramCount == 10) {isGameDone();}   
    nextAnagram();
    } else if( timeLeft >= 16 ) {
    timer.classList.add("green-timer");
    } else if( timeLeft >= 6 ) {
    timer.classList.remove("green-timer");
    timer.classList.add("yellow-timer");
    } else {
    timer.classList.remove("yellow-timer");
    timer.classList.add("red-timer");
    }
    timeLeft -= 1;
    }, 1000);

function stopTimer() {
    clearInterval(countdownTimer);
}

function clearInput() {
    document.getElementById("answer").value = '';
}



function answerAnagram(answer) {

    //need a function where people can submit the answer in the game and then the timers stop, if the answer is correct then they gain points based on difficulty level

    if (anagramAnswer.value.toLowerCase() === answer) {
        score = score + parseInt(sessionStorage.getItem("gamePoints"));
        correctAnswers += 1;
    }
    else {
        score += 0;
    }

    console.log(score);
    console.log(correctAnswers);
    clearInterval(timeLeft = 30);
    timer.classList.remove("red-timer");
    timer.classList.remove("yellow-timer");
    timer.classList.add("green-timer");
    nextAnagram();
    
}

function isGameDone() {
        stopTimer();
        document.getElementById("game-over-modal").classList.add("reveal");
        finalScore();
    }


function finalScore() {

    // this function to display the final score and then may add how many anagrams out of ten were correct
    $("#endgame-score").html(`You finished the game with ${score} points! You got ${correctAnswers} anagrams correct.`)
}

let answerBtn = document.querySelector('#answer-btn');

answerBtn.addEventListener('click', () => {
    answerAnagram(answer);
    clearInput();
    answerButtonClicked = true;
    if (anagramCount == 10) {
        isGameDone();
    }
})