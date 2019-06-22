$(document).ready(function() {
    $("#q1-submit").click(function(){
        var selectedItem = $("#q1-dropdown").val();
        var value = $("#q1-dropdown").children("option:selected").html();
        $("#q1-response").html("you clicked submit, " + value + ", "+ selectedItem)
    });
});

