// date
const Date = new Date;
const year = Date.year;
const ElementId = 'christmasday';
var countDownDate = new Date(`Dec 25, ${year} 00:00:00`).getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById(ElementId).innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById(ElementId).innerHTML = "EXPIRED";
  }
}, 1000);