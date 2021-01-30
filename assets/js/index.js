$(document).ready(function() {

    // this is to activate the inactive modal for the game modes not yet developed
    $(".inactive-landing-btn").click(function() {
        $(".inactive-modal").addClass("reveal")
    });

    // this is to close the modal on the index page
    $(".close-btn").click(function() {
        $("inactive-modal").removeClass("reveal")
    });
});