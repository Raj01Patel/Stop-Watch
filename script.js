let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lap');
let lapList = document.getElementById("lapList");
let con = document.getElementById("container2");
con.style.display = "none";


let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});


stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
});


resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    lapList.innerHTML = ``;
    msec = secs = mins = 0;
    lapCount = 1;
    timerId=null;
});


let lapCount = 1;
lapBtn.addEventListener('click', function () {
    con.style.display = "block";
    if (timerId !== null) {
        let lapTime = timerDisplay.innerText;
        let lapItem = document.createElement("li");
        lapItem.innerText = "Lap " + lapCount + ": " + lapTime;
        lapList.appendChild(lapItem);
        lapCount++;
    }
});


function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;


    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}
