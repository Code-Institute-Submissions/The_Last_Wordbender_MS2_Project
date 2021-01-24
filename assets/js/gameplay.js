var easyGame = [["calm", "peace"], ["lantern", "guiding light"], ["blemish", "imperfection"], ["divine", "holy"], ["emotion", "feelings"], ["rotation", "circular"], ["karma", "what comes around goes around"], ["revenge", "payback"], ["shipwreck", "the Titanic"], ["poetry", "... in motion"]]

var mediumGame = [["rejoice", "celebrate"], ["elevate", "higher"], ["invulnerable", "can't be hurt"], ["liberty", "freedom"], ["scarce", "hard to find"], ["zealot", "a true fanatic"], ["heretic", "a blasphemous person"], ["subordinate", "member of the rank and file"], ["citadel", "fortress"], ["paramount", "important"]]

var hardGame = [["tyrannical", "oppressive"], ["meticulous", "in great detail"], ["miniscule", "tiny"], ["flagrant", "brazen wrongdoing"], ["juxtaposition", "side by side comparison"], ["paradox", "a contradiction"], ["philanthropic", "charitable intentions"], ["impervious", "no entry"], ["emphatic", "forceful"], ["prehistoric", "time of the dinosaurs"]]

console.log(hardGame[0][0].split(''));

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
