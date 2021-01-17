$(document).ready(function() {
    $(".inactive").click(function() {
        $(".base-modal").addClass("bg-active-modal");
    });
    $(".close-btn").click(function() {
        $(".base-modal").removeClass("bg-active-modal");
    });
});