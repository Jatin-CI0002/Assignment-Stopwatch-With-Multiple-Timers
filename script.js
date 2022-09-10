let startButton1 = document.getElementById("start1");
let stopButton1 = document.getElementById("stop1");
let resetButton1 = document.getElementById("reset1");

let startButton2 = document.getElementById("start2");
let stopButton2 = document.getElementById("stop2");
let resetButton2 = document.getElementById("reset2");

let minute1 = document.getElementById("minute1");
let second1 = document.getElementById("second1");
let mSecond1 = document.getElementById("mSecond1");

let minute2 = document.getElementById("minute2");
let second2 = document.getElementById("second2");
let mSecond2 = document.getElementById("mSecond2");

let interval1;
let interval2;
let hr1 = min1 = sec1 = ms1 = "0" + 0;
let hr2 = min2 = sec2 = ms2 = "0" + 0;

startButton1.addEventListener("click", () => {
  interval1 = setInterval(() => {
    ms1++;
    if (ms1 == 100) {
      sec1++;
      sec1 = sec1 < 10 ? "0" + sec1 : sec1;
      ms1 = "0" + 0;
    }

    if (sec1 == 60) {
      min1++;
      min1 = min1 < 10 ? "0" + min1 : min1;
      sec1 = "0" + 0;
    }

    if (min1 == 60) {
      hr1++;
      hr1 = hr1 < 10 ? "0" + hr1 : hr1;
      min1 = "0" + 0;
    }
    displayTime1();
  }, 10);
});

stopButton1.addEventListener("click", () => {
  clearInterval(interval1);
});

resetButton1.addEventListener("click",()=>{
    clearInterval(interval1);
    hr1 = min1 = sec1 = ms1 = "0" + 0;
    displayTime1();
})

function displayTime1() {
  minute1.innerHTML = min1;
  second1.innerHTML = sec1;
  mSecond1.innerHTML = ms1;
}


// For timer 2

startButton2.addEventListener("click", () => {
  interval2 = setInterval(() => {
    ms2++;
    if (ms2 == 100) {
      sec2++;
      sec2 = sec2 < 10 ? "0" + sec2 : sec2;
      ms2 = "0" + 0;
    }

    if (sec2 == 60) {
      min2++;
      min2 = min2 < 10 ? "0" + min2 : min2;
      sec2 = "0" + 0;
    }

    if (min2 == 60) {
      hr2++;
      hr2 = hr2 < 10 ? "0" + hr2 : hr2;
      min2 = "0" + 0;
    }
    displayTime2();
  }, 10);
});

stopButton2.addEventListener("click", () => {
  clearInterval(interval2);
});

resetButton2.addEventListener("click",()=>{
    clearInterval(interval2);
    hr2 = min2 = sec2 = ms2 = "0" + 0;
    displayTime2();
})

function displayTime2() {
  minute2.innerHTML = min2;
  second2.innerHTML = sec2;
  mSecond2.innerHTML = ms2;
}


