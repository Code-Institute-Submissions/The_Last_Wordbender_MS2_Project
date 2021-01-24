
let shuffledAnagrams, currentAnagramIndex



function startGame() {
    
}

function nextAnagram() {

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

const easyGame = [
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

const mediumGame = [
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

const hardGame = [
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

console.log(hardGame[0][0].split(''));
