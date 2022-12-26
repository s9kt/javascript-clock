let date = new Date();
let running = true;
let time;
let s = 0;
let m = 0;
let h = 0;
let interval;

function setTime() {
  date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ms = date.getMilliseconds();
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  let f = h + ":" + m + ":" + s;

  return f;
}
function setDate() {
  date = new Date();
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let w = date.getDay();
  let m = date.getMonth();
  let d = date.getDate();
  let y = date.getFullYear();
  if (d < 10) {
    d = "0" + d;
  }
  if (m < 10) {
    m = "0" + m;
  }
  let f = weekDays[w] + " " + months[m] + " " + d + ", " + y
  return f;
}
function stopWatch() {
    s++;
    if(s == 60) {
      m++;
      s = 0;
    }
    if(m == 60){
      h++;
      m = 0;
    }
  time = h + ":" + m + ":" + s;
  return time;
}
function init() {
  interval = setInterval(() => {
  document.getElementById("stopWatch").innerText = stopWatch();
}, 1000);
  document.getElementById('start').style.visibility= 'hidden';
  document.getElementById('stop').style.visibility= 'visible';
  document.getElementById("reset").style.visibility='hidden';
}
function reset() {
  term();
  s = 0;
  m = 0;
  h = 0;
  document.getElementById("stopWatch").innerText = h + ":" + m + ":" + s;
}
function term() {
  clearInterval(interval);
  document.getElementById('start').style.visibility= 'visible';
  document.getElementById('stop').style.visibility= 'hidden';
  document.getElementById("reset").style.visibility='visible';
}
setInterval(() => {
  document.getElementById("clock").innerText = setTime();
  document.getElementById("date").innerText = setDate();
}, 1);
