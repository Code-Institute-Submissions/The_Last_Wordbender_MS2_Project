// default setting of sound being off
sessionStorage.setItem("sound", "off");
sessionStorage.setItem("gamemode", "easy");
sessionStorage.setItem("gamePoints","50");

$(document).ready(function() {

    // this is to activate the how to play modal being shown
    $("#how-to-play").click(function() {
        $(".htp-modal").addClass("reveal");
    });

    // this is to activate the high scores modal being shown
    $("#high-scores").click(function() {
        $(".hs-modal").addClass("reveal");
    });

    // this is to close any modals in the html file
    $(".close-btn").click(function() {
        $(".hs-modal").removeClass("reveal");
        $(".htp-modal").removeClass("reveal");
    });

    //This is for setting the game difficulty
    $("#btn-easy").click(function() {
        sessionStorage.setItem("gamemode", "easy");
        sessionStorage.setItem("gamePoints","50");
    });

    $("#btn-medium").click(function() {
        sessionStorage.setItem("gamemode", "medium");
        sessionStorage.setItem("gamePoints","100");
    });

    $("#btn-easy").click(function() {
        sessionStorage.setItem("gamemode", "hard");
        sessionStorage.setItem("gamePoints","200");
    });

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
        startGame();
    }); 

    
});



