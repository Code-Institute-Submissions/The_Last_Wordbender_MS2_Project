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
let shuffledAnagrams, currentAnagramIndex

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
    showAnagram(shuffledAnagrams[currentAnagramIndex])
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


function answerSubmitted() {

}

function countdownTimer() {

    $("#timer").removeClass("yellow-timer");
    $("#timer").removeClass("red-timer");
    time = 30;

    counterTime = setInterval(function () {
        $("#timer").html(time);
        time--;
        if (time<16 && time>5) {
            $("#timer").addClass("yellow-timer");
        }
        if (time<=5) {
            $("#timer").addClass("red-timer");
        }
        if (time<=0) {
            resetTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(counterTime);
    countdownTimer();
}

function stopTimer() {
    clearInterval(counterTime);
}

function finalScore() {
    $("#endgame-score").html(`You fnished the game with ${localStorage.getItem("points")} points`)
}}







