const easyAnagrams = [
    {answer: "calm", clue: "peace"},
    {answer: "lantern", clue: "guiding light"},
    {answer: "blemish", clue: "imperfection"},
    {answer: "divine", clue: "holy"},
    {answer: "emotion", clue: "feelings"},
    {answer: "rotation", clue: "circular"},
    {answer: "karma", clue: "what comes around goes around"},
    {answer: "revenge", clue: "payback"},
    {answer: "shipwreck", clue: "the Titanic"},
    {answer: "poetry", clue: "... in motion"}]

const mediumAnagrams = [
    {answer: "rejoice", clue: "celebrate"},
    {answer: "elevate", clue: "higher"},
    {answer: "invulnerable", clue: "can't be hurt"},
    {answer: "liberty", clue: "freedom"},
    {answer: "scarce", clue: "hard to find"},
    {answer: "zealot", clue: "a true fanatic"},
    {answer: "heretic", clue: "a blasphemous person"},
    {answer: "subordinate", clue: "member of the rank and file"},
    {answer: "citadel", clue: "fortress"},
    {answer: "paramount", clue: "important"}]

const hardAnagrams = [
    {answer: "tyrannical", clue: "oppressive"},
    {answer: "meticulous", clue: "in great detail"},
    {answer: "miniscule", clue: "tiny"},
    {answer: "flagrant", clue: "brazen wrongdoing"},
    {answer: "juxtapostion", clue: "side by side comparison"},
    {answer: "paradox", clue: "a contradiction"},
    {answer: "philanthropic", clue: "charitable intentions"},
    {answer: "impervious", clue: "no entry"},
    {answer: "emphatic", clue: "forceful"},
    {answer: "prehistoric", clue: "time of the dinosaurs"}]

const nextButton = document.getElementById('next-btn')
const anagramElement = document.getElementById('anagram')
const clueElement = document.getElementById('clue')
const timeLeftDisplay = document.querySelector('#timer')
let shuffledAnagrams, currentAnagramIndex
var anagramCount = 0

$(document).ready(function() {

    // This is to transition to the gameplay screen and start the game"
    $('#start-btn').click(function() {
        $(".anagram-nav").addClass("hide");
        $(".gameplay-screen").addClass("reveal");
        startGame();
        countdownTimer();
    }); 

    // This is to transition back to the Anagram Atlantis navigation screen and reset the timer
    $('.home-btn').click(function() {
        $(".anagram-nav").removeClass("hide");
        $(".gameplay-screen").removeClass("reveal");
    });

    // This to restart the game
   $('.restart-btn').click(function() {
        startGame();
        resetTimer();
        countdownTimer();
    }); 
});

function startGame() {
    
    // on easy mode I want to shuffle through the easyAnagrams object take out the answer and use function to scramble the word to make the anagram
    if (sessionStorage.getItem("gamemode") === "easy") {
    shuffledAnagrams = easyAnagrams[Math.floor(Math.random()*easyAnagrams.length)]
    const anagram = createAnagram(shuffledAnagrams.answer)
    showAnagram(anagram, shuffledAnagrams.clue);
    

    // on medium mode I want to shuffle through the mediumAnagrams object
    } else if (sessionStorage.getItem("gamemode") === "medium") {
        shuffledAnagrams = mediumAnagrams[Math.floor(Math.random()*mediumAnagrams.length)]
        const anagram = createAnagram(shuffledAnagrams.answer)
        showAnagram(anagram, shuffledAnagrams.clue);

    // when it's neither on easy or medium I want to shuffle through the hardAnagrams object
    } else {
        shuffledAnagrams = hardAnagrams[Math.floor(Math.random()*hardAnagrams.length)]
        const anagram = createAnagram(shuffledAnagrams.answer)
        showAnagram(anagram, shuffledAnagrams.clue);

    
}

function nextAnagram() {
    
    // on easy mode I want to shuffle through the easyAnagrams object take out the answer and use function to scramble the word to make the anagram
    if (sessionStorage.getItem("gamemode") === "easy") {
    shuffledAnagrams = easyAnagrams[Math.floor(Math.random()*easyAnagrams.length)]
    const anagram = createAnagram(shuffledAnagrams.answer)
    showAnagram(anagram, shuffledAnagrams.clue);
    

    // on medium mode I want to shuffle through the mediumAnagrams object
    } else if (sessionStorage.getItem("gamemode") === "medium") {
        shuffledAnagrams = mediumAnagrams[Math.floor(Math.random()*mediumAnagrams.length)]
        const anagram = createAnagram(shuffledAnagrams.answer)
        showAnagram(anagram, shuffledAnagrams.clue);

    // when it's neither on easy or medium I want to shuffle through the hardAnagrams object
    } else {
        shuffledAnagrams = hardAnagrams[Math.floor(Math.random()*hardAnagrams.length)]
        const anagram = createAnagram(shuffledAnagrams.answer)
        showAnagram(anagram, shuffledAnagrams.clue);
}
    anagramCount +=1
}

function showAnagram(anagram, clue) {

    anagramElement.innerText = anagram
    clueElement.innerText = clue
    
}

function createAnagram(answer) {

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

function countdownTimer() {
    var countdownTimer = setInterval(function() {
        let timer = document.getElementById("timer")
        timeLeft -= 1
        timeLeftDisplay.innerText = timeLeft
        console.log(timeLeft)

        if(timeLeft <=0) {
            clearInterval(countdownTimer)    
        } else if (timeLeft >= 16) {
            timer.classList.add("green-timer")
        } else if (timeLeft >=5) {
            timer.classList.remove("green-timer")
            timer.classList.add("yellow-timer")
        } else {
            timer.classList.remove("yellow-timer")
            timer.classList.add("red-timer")
        } 
    },1000);
}

function resetTimer() {
    clearInterval(countdownTimer);
    countdownTimer();
}

function stopTimer() {
    clearInterval(countdownTimer);
}


function answerAnagram() {
    
}



function finalScore() {
    $("#endgame-score").html(`You fnished the game with ${localStorage.getItem("gamePoints")} points`)
}}







