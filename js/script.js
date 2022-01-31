document.body.style.backgroundColor = "#000"

let elClock = document.querySelector('.clock');
let elClockSpan = document.querySelector(".clock__span");
// STYLE-CLOCK
elClock.style.margin = "250px auto";
elClock.style.textAlign = "center";
elClock.style.color = "rgb(0, 110, 255)";
elClock.style.fontSize = "70px";
elClock.style.fontFamily = "sans-serif";


const tick = () => {
     const now = new Date();
     const h = now.getHours();
     const m = now.getMinutes();
     const s = now.getSeconds();

     elClock.innerText = h + " : " + m + " : " + s;
}

setInterval(tick, 1000);