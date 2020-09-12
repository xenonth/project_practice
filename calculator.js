$(document).ready(function() {
    // calculator Keypad variables
    $("#one").click(function () {
        var oneDisplay = $("#one").attr("value");
        console.log(oneDisplay);
        $("#first-number").after(oneDisplay);
    });

});