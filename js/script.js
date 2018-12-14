/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q3Result = $("#question4").val();
        var totalScore;
        function car(answer) {
            if (answer === "BMW") {
                return 1;
            }
            else if (answer === "Chevy") {
                return 2;
            }
        
            else {
                return 3;
            }
            
        };
        function party(answer) {
            if (answer === "Yes"){
                return 3;    
            }
            
            else if (answer === "No"){
                return 1;    
            }
            
            else {
                return 2;
            }
        }
        function people(answer){
            if (answer === "Yes"){
                return 3;
            }
            else if (answer === "No"){
                return 1;            
            }
            else {
                return 2;
            }
         
            
        }
        car(q1Result)
    });

});
