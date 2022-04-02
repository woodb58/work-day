var currentDay = moment().format("MMMM Do YYYY");
var currentHour = moment().format("HH:mm a");

$(document).ready(function () {
  var getTime = document.getElementById("currentDay");
  getTime.innerHTML = currentDay;
});

$(".saveBtn").on("click", function () {
  // Get nearby values in JQuery
  var text = $(this).siblings(".col-md-10").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
});
