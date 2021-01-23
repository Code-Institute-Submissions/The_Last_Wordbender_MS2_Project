$(document).ready(function() {

    // this is to activate the inactive modal for the game modes not yet developed
    $(".inactive").click(function() {
        $(".inactive-modal").show(300);
    });

    // this is to close the modal on the index page
    $(".close-btn").click(function() {
        $(".inactive-modal").hide(300);
    });
});