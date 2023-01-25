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
        
        var TimeItems = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
        var TimeLength = TimeItems.length;

        var blockTime = parseInt($(this).parent().parent().attr("value"));
        
        console.log (blockTime)

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).next().removeClass("future").prop( "disabled", true );
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


(function LoadItems() {
    //Establish array and array length
    var TimeItems = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
    var TimeLength = TimeItems.length;
    
    //Create Loop iterations 
    for (var i = 0; i < TimeLength; i++) {
    
    //Change Element Values from storage
    $("#"+TimeItems[i]+" #event").val(localStorage.getItem(TimeItems[i]));
    
    console.log((TimeItems)[i]);
    }
    
    })();


timeTracker();


