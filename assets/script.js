// var rightNow = moment().format("dddd, MMMM Do");

// var Time = function () {
//   $("#currentDay").append(rightNow);
// };
// Time();

var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);
