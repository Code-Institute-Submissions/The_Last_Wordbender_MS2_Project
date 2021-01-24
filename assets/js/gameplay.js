const easyAnagrams = [
    {anagram: "mlca", answer: "calm", clue: "peace"},
    {anagram: "tralnner", answer: "lantern", clue: "guiding light"},
    {anagram: "embhils", answer: "blemish", clue: "imperfection"},
    {anagram: "viiden", answer: "divine", clue: "holy"},
    {anagram: "moonite", answer: "emotion", clue: "feelings"},
    {anagram: "iotroatn", answer: "rotation", clue: "circular"},
    {anagram: "kaamr", answer: "karma", clue: "what comes around goes around"},
    {anagram: "gveenre", answer: "revenge", clue: "payback"},
    {anagram: "rcspikwhe", answer: "shipwreck", clue: "the Titanic"},
    {anagram: "tropey", answer: "poetry", clue: "... in motion"}]

const mediumAnagrams = [
    {anagram: "ijroece", answer: "rejoice", clue: "celebrate"},
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
    $('#start-btn').click(function() {
        $(".anagram-nav").addClass("hide");
        $(".gameplay-screen").addClass("reveal");
    });
    
    if (sessionStorage.getItem("gamemode") === "easy") {
    shuffledAnagrams = easyAnagrams.sort(() => Math.random() - .5)
    currentAnagramIndex = 0
    nextAnagram()
    } else if (sessionStorage.getItem("gamemode") === "medium") {
        shuffledAnagrams = mediumAnagrams.sort(() => Math.random() - .5)
    currentAnagramIndex = 0
    nextAnagram()
    } else {
        shuffledAnagrams = hardAnagrams.sort(() => Math.random() - .5)
    currentAnagramIndex = 0
    nextAnagram()
}

function nextAnagram() {
    showAnagram(shuffledAnagrams[currentAnagramIndex])
}

function showAnagram(anagram, clue) {
    anagramElement.innerText = easyAnagrams.anagram
    clueElement.innerText = easyAnagrams.clue
}

showAnagram();

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

countdownTimer();

function resetTimer() {
    clearInterval(counterTime);
    countdownTimer();
}

function stopTimer() {
    clearInterval(counterTime);
}

function finalScore() {
    $("#endgame-score").html(`You fnished the game with ${localStorage.getItem("points")} points`)
}
