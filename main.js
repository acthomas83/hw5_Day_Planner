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
    var clock = moment.unix(Number);
  console.log(clock);
  
//   THIS IS WHERE I GOT STUCK
if(clock >'9:00:00 a') {
    document.getElementById("nine-am").style.color = "red";
}}

// set css of event blocks to be red at present time, green in future, and gray in the past
// Strore values of each event block in localStorage when clicking save button.
