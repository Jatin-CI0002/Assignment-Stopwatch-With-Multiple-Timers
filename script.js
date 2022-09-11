let startButton1 = document.getElementById("start1");
let startButton2 = document.getElementById("start2");

let stopButton1 = document.getElementById("stop1");
let stopButton2 = document.getElementById("stop2");

let resetButton1 = document.getElementById("reset1");
let resetButton2 = document.getElementById("reset2");
let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");

let interval1;
let interval2;

let obj1 = {
  "min": 00,
  "sec": 00,
  "ms": 00
};

let obj2 = {
  "min": 00,
  "sec": 00,
  "ms": 00
};

let hr1 = (min1 = sec1 = ms1 = "0" + 0);
let hr2 = (min2 = sec2 = ms2 = "0" + 0);

startButton1.onclick = function () {
  interval1 = start("display1", obj1.min, obj1.sec, obj1.ms, interval1);
};

startButton2.onclick = function () {
  interval2 = start("display2", obj2.min, obj2.sec, obj2.ms, interval2);
};

stopButton1.onclick = function () {
  console.log("hello1");
  let str = display1.innerText;
  let temp = str.split(":");
  obj1 = {
    min: parseInt(temp[0]),
    sec: parseInt(temp[1]),
    ms: parseInt(temp[2])
  };
  stop(interval1);
};

stopButton2.onclick = function () {
  console.log("hello2");
  let str = display1.innerText;
  let temp = str.split(":");
  obj2 = {
    min: parseInt(temp[0]),
    sec: parseInt(temp[1]),
    ms: parseInt(temp[2])
  };
  stop(interval2);
};

resetButton1.onclick = function (){
  reset(obj1, interval1, display1);
}

resetButton2.onclick = function (){
  reset(obj2, interval2, display2);
}

function start(element, min, sec, ms, interval) {
  let display = document.getElementById(element);
  interval = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }

    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }

    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    let value = `${min} : ${sec} : ${ms}`;
    display.innerHTML = value;
  }, 10);
  
  return interval;
}

function stop(interval) {
  console.log(interval);
  clearInterval(interval);
}

function reset(obj, interval, display){
  obj.min = 0;
  obj.sec = 0;
  obj.ms = 0;
  display.innerHTML = "0 : 0 : 0";
  clearInterval(interval);
}