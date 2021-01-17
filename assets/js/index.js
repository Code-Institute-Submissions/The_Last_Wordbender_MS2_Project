$(document).ready(function() {
    $(".inactive").click(function() {
        $(".base-modal").addClass("bg-active-modal");
    });
    $(".modal-close").click(function() {
        $(".base-modal").removeClass("bg-active-modal");
    });
});