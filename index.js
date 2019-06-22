$(document).ready(function() {


    function createQuestion(parentDiv,questionNumber,questionText,answerOptionsArray,correctAnswer) {
     
        var qid = "q"+questionNumber;
        $("#"+parentDiv).append("<div id='q"+questionNumber+"'></div>")
        $("#"+qid).html("<div><strong>Q"+questionNumber+": </strong>"+questionText+"</div>");
        var questionDropdownHtml = "<div><select id='"+qid+"-dropdown'><option value='0'>--Choose an answer--</option>";
        for (var i=1;i<=answerOptionsArray.length;i++) {
            var value=answerOptionsArray[i-1];
            questionDropdownHtml += "<option value='"+i+"'>"+value+"</option>";
        }
        questionDropdownHtml += "</select></div>";
        $("#"+qid).append(questionDropdownHtml);
        $("#"+qid).append("<div><button id='"+qid+"-submit'>Submit</button></div>");
        $("#"+qid).append("<div id='"+qid+"-response'></div>");

        evaluateQuestion(qid+"-submit",qid+"-dropdown",qid+"-response",correctAnswer);


  
    }

    function evaluateQuestion(submit,dropdown,response,correctAnswer) {
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

    

    createQuestion("questions","1","Who is the inventor of electric cars?",["Elon Musk","Robert Anderson","Franz von Holzhausen","Darius Chacko Jones"],2);
    createQuestion("questions","2","Who did the design of Tesla?",["Elon Musk","Zachary Anderson","Franz von Holzhausen","Darius Chacko Jones"],3);
    createQuestion("questions","3","What is the tesla model S price?",["CAD$ 102,890","CAD$ 110,560","CAD$ 78,000","CAD$ 35,000"],1);
    createQuestion("questions-p","4","what will be the amount of vehicles by 2050?",["1 billon", "3 billon", "5 billon", "10 billon"],2);


});

