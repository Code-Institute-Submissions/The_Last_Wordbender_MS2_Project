$(document).ready(function() {
    $("#how-to-play").click(function() {
        $(".htp-modal").addClass("bg-active-modal");
    });
    $(".modal-close").click(function() {
        $(".htp-modal").removeClass("bg-active-modal");
    });
});