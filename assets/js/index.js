$(document).ready(function() {
    $(".inactive").click(function() {
        $(".inactive-modal-bg").addClass("bg-active-modal");
    });
    $(".modal-close").click(function() {
        $(".inactive-modal-bg").removeClass("bg-active-modal");
    });
});