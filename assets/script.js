var currentDayWeek = moment().format("dddd");
var currentDate = moment().format("MMMM Do");
var currentHour = moment().format("h:mm a");

// date and time for header
$(document).ready(function () {
  var getTime = document.getElementById("currentDay");
  getTime.innerHTML = currentDayWeek + ", " + currentDate + " " + currentHour;
});

// button to save to local storage
$(".saveBtn").on("click", function () {
  // Get nearby values of the userText in JQuery
  var text = $(this).siblings(".userText").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

function setClass() {
  //get current hour
  var currentTime = moment().hour();

  // loop over time blocks
  $(".time-block").each(function () {
    var scheduleHour = parseInt($(this).attr("id").split("hour")[1]);

    // To check the time and add the classes for background indicators
    if (scheduleHour < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (scheduleHour === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
// retrieve from local storage
$("#hour8 .userText").val(localStorage.getItem("hour8"));
$("#hour9 .userText").val(localStorage.getItem("hour9"));
$("#hour10 .userText").val(localStorage.getItem("hour10"));
$("#hour11 .userText").val(localStorage.getItem("hour11"));
$("#hour12 .userText").val(localStorage.getItem("hour12"));
$("#hour13 .userText").val(localStorage.getItem("hour13"));
$("#hour14 .userText").val(localStorage.getItem("hour14"));
$("#hour15 .userText").val(localStorage.getItem("hour15"));
$("#hour16 .userText").val(localStorage.getItem("hour16"));
$("#hour17 .userText").val(localStorage.getItem("hour17"));

setClass();

// button clears local storage and text area
$("#clearBtn").click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});
