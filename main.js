$(document).ready(function(storage){
  //  var storage = localStorage.getItem(x, event)
console.log(storage)
})
// display day and date under header text
var dateTime = document.getElementById("#date-time");
var time = moment().format('h:mm:ss a');
var date = moment().format('MMMM Do YYYY');
var day = moment().format('dddd');
console.log(time);
console.log(date);
console.log(day);

var div = document.getElementById("day-date");
div.innerHTML += day + ", " + date;

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var time = moment().format('h:mm:ss a');
    // var clock = moment.unix(Number);
  // console.log(time);
  
//   THIS IS WHERE I GOT STUCK
// if(clock >'9:00:00 a') {
//     document.getElementById("nine-am").style.color = "red";}
}

// var addEvent = 
// set css of event blocks to be red at present time, green in future, and gray in the past
// Strore values of each event block in localStorage when clicking save button.
$(".save-btn9").on("click", function() {
  var saveButton = $(this).attr("data-hour");

  console.log(this);
  console.log($(this).parent().siblings("input").val());
  
  var event = $(this).parent().siblings("input").val()
  var x = $(this).attr("data-hour")
  //localStorage.setItem($(this).attr("data-hour"), event);
  localStorage.setItem(x, event);
  console.log(localStorage.setItem(x, event))
  

  // add attributes to the save buttons
});