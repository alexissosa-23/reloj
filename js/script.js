function updateClock() {
  var now = new Date(); // fecha Actual
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours;

  var secondsDeg = ((seconds / 60) * 360) + 90;
  var minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  var hoursDeg = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90;

  document.getElementById('seconds').style.transform = 'rotate(' + secondsDeg + 'deg)';
  document.getElementById('minutes').style.transform = 'rotate(' + minutesDeg + 'deg)';
  document.getElementById('hour').style.transform = 'rotate(' + hoursDeg + 'deg)';
}

setInterval(updateClock, 1000);
updateClock();
