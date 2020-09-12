$(document).ready(function() {
    //SElector functions for numbers 0-9 for slot one on first side
    // button One for slot one on result card
    $("#one").click(function () {
        var oneDisplay = $("#one").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });
    // button 2 to display two on result card
    $("#two").click(function () {
        var oneDisplay = $("#two").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#three").click(function () {
        var oneDisplay = $("#three").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#four").click(function () {
        var oneDisplay = $("#four").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#five").click(function () {
        var oneDisplay = $("#five").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#six").click(function () {
        var oneDisplay = $("#six").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#seven").click(function () {
        var oneDisplay = $("#seven").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#eight").click(function () {
        var oneDisplay = $("#eight").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#nine").click(function () {
        var oneDisplay = $("#nine").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });

    $("#zero").click(function () {
        var oneDisplay = $("#zero").attr("value");
        console.log(oneDisplay);
        $("#first-number").append(oneDisplay);
    });
    // passing first value to a variable and coverting to an integer
    

    
    // operator buttons to work 

    $("#positive").click(function () {
        
       var signDisplay = $("#positive").text();
        $("#operator").append(signDisplay);
        
    });

    // registration of second number after press of operator
    if ($("operator").text() !== undefined) {
            //Button display for slot 2
    $("#one").click(function () {
        var oneDisplay = $("#one").attr("value");
        console.log(oneDisplay);
        $("#second-number").append(oneDisplay);
        });
        // button 2 to display two on result card
        $("#two").click(function () {
        var oneDisplay = $("#two").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
     $("#three").click(function () {
        var oneDisplay = $("#three").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
        $("#four").click(function () {
        var oneDisplay = $("#four").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
        $("#five").click(function () {
        var oneDisplay = $("#five").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
        $("#six").click(function () {
        var oneDisplay = $("#six").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
        $("#seven").click(function () {
        var oneDisplay = $("#seven").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
        $("#eight").click(function () {
        var oneDisplay = $("#eight").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
        $("#nine").click(function () {
        var oneDisplay = $("#nine").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    
        $("#zero").click(function () {
        var oneDisplay = $("#zero").attr("value");
        console.log(oneDisplay);
        $("#second-number").after(oneDisplay);
        });
    }
    }

    // equation function
    $("#equality").click(function () {
        var firstNumber = $("#first-number").text();
        var operation = $("#operator").text();
        var secondNumber = $("#second-number").text();
        console.log(`${firstNumber} ${operation} ${secondNumber}`);
    });
});
