$(document).ready(function() {

    function showQuestion(submit,dropdown,response,correctAnswer) {
        $("#"+submit).click(function(){
            var index = $("#" + dropdown).val();
            var value = $("#" + dropdown).children("option:selected").html();
            
            if (index == correctAnswer) {
                $("#" + response).html("That's correct!");
            }
            else {
                $("#" + response).html("That's incorrect :( ");
            }
        });
    }

    showQuestion("q1-submit","q1-dropdown","q1-response",2);
});

