$(document).ready(function() {
    $(".inactive-modal").click(function() {
        $(".inactive-modal-bg").addClass("bg-active-modal");
    });
    $(".modal-close").click(function() {
        $(".inactive-modal-bg").removeClass("bg-active-modal");
    });
});