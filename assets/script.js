var currentDayWeek = moment().format("dddd");
var currentDate = moment().format("MMMM Do");
var currentHour = moment().format("h:mm a");

$(document).ready(function () {
  var getTime = document.getElementById("currentDay");
  getTime.innerHTML = currentDayWeek + ", " + currentDate + " " + currentHour;
});

$(".saveBtn").on("click", function () {
  // Get nearby values of the description in JQuery
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
});

function setClass() {
  //get current number of hours.
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

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

setClass();

$("#clearBtn").click(function (event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});
