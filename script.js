let date = new Date();

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
setInterval(() => {
  document.getElementById("clock").innerText = setTime();
  document.getElementById("date").innerText = setDate();
}, 1);