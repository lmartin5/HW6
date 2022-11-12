/*
Name:     Luke Martin
Class:    CPSC 332 - Web Dev
Semester: Fall 2022
Project:  Homework 6
Last Mod: November 12, 2022
Desc:     The file contains the JS for a timer created using JQuery.
Modified from: https://codepen.io/cathydutton/pen/GBcvo
*/

$(document).ready(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var $timer = $("#timer");
    var interval;
    var opacityInterval;

    var buttonStyles = {
        backgroundColor: "#00BFFF",
        borderRadius: "25%",
        fontSize: "16pt",
        color: "white",
        textShadow: "1px 1px 2px red",
        marginLeft: "5px",
        marginRight: "5px"
    };
    var timerBackgroundStyles = {
        margin: "10px auto",
        fontSize: "larger",
        backgroundColor: "grey",
        color: "white",
        textAlign: "center",
        width: "200px",
        borderRadius: "10px"
    };
    var timerContainerStyles = {
        width: "325px",
        margin: "10px auto",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        borderRadius: "25%",
        paddingBottom: "15px",
    };
    
    $timer.addClass("timer-background");
    $buttonStart.addClass("timer-button");
    $buttonStop.addClass("timer-button");
    $buttonReset.addClass("timer-button");

    $("#timer-container").css(timerContainerStyles);
    $(".timer-button").css(buttonStyles);
    $(".timer-background").css(timerBackgroundStyles);
    $("#timer-logo").css({
        width: "275px",
        margin: "10px auto"
    });
    $("#button-container").css({
        display: "flex", 
        flexDirection: "row",
        justifyContent: "center"
    });

    $buttonStart.click(function() {
        clearInterval(interval);
        clearInterval(opacityInterval);
        $timer.css("background-color", "rgb(51, 165, 50)");
        interval = setInterval(startTimer, 10);
        changeOpacity();
        opacityInterval = setInterval(changeOpacity, 2000);
    });

    $buttonStop.click(function() {
        $timer.stop();
        clearInterval(interval);
        clearInterval(opacityInterval);
        $timer.css("background-color", "rgb(251, 18, 47)");
        $timer.css("opacity", "1.0");
    });

    $buttonReset.click(function() {
        $timer.stop();
        clearInterval(interval);
        clearInterval(opacityInterval);
        $timer.css("background-color", "grey");
        $timer.css("opacity", "1.0");
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
    });

    function changeOpacity() {
        $timer.animate({
            opacity: "0.8"
        }, 1000, function() {
            $timer.animate({
                opacity: "1.0"
            }, 1000);
        })
    }

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});