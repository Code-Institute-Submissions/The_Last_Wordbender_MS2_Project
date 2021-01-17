$(document).ready(function() {
    $("#how-to-play").click(function() {
        $(".htp-modal").addClass("bg-active-modal");
    });
    $(".close-btn").click(function() {
        $(".htp-modal").removeClass("bg-active-modal");
    });
    $("#high-scores").click(function() {
        $(".high-score-modal").addClass("bg-active-modal");
    });
    $(".close-btn").click(function() {
        $(".high-score-modal").removeClass("bg-active-modal");
    });
});