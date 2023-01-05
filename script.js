//Display Time in header
var todaydate = new Date();
$( "#currentDay" ).text(todaydate.toDateString());

console.log("#currentDay");

//Button input

$(document).ready(function () {
    console.log("ready")
    // saveBtn click listener 
    $(".savebutton").on("click", function () {
        // Get nearby values of the description in JQuery
        console.log ("hello")

        var text = $(this).siblings("#event").val();
        var time = $(this).parent().parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
})

function timeTracker() {
    //get current number of hours.
    var timeNow = todaydate.getHours();

    console.log (timeNow)

    // loop over time blocks
    $(".time").each(function () {
        var blockTime = ($(this).parent().parent().attr("id"));
        
        console.log (blockTime)

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).next().removeClass("future");
            $(this).next().removeClass("present");
            $(this).next().addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).next().removeClass("past");
            $(this).next().removeClass("future");
            $(this).next().addClass("present");
        }
        else {
            $(this).next().removeClass("present");
            $(this).next().removeClass("past");
            $(this).next().addClass("future");

        }
    })
}
   
// Get item from local storage if any
$("#8AM #event").val(localStorage.getItem("8AM"))
$("#9AM #event").val(localStorage.getItem("9AM"))
$("#10AM #event").val(localStorage.getItem("10AM"))
$("#11AM #event").val(localStorage.getItem("11AM"))
$("#12PM #event").val(localStorage.getItem("12PM"))
$("#1PM #event").val(localStorage.getItem("1PM"))
$("#2PM #event").val(localStorage.getItem("2PM"))
$("#3PM #event").val(localStorage.getItem("3PM"))
$("#4PM #event").val(localStorage.getItem("4PM"))
$("#5PM #event").val(localStorage.getItem("5PM"))


timeTracker();
