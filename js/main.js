//Variables
const hoursElement = document.querySelector('.hours'),
    minutesElement = document.querySelector('.minutes'),
    secondsElement = document.querySelector('.seconds'),
    millisecondsElement = document.querySelector('.milliseconds');

const startBtn = document.querySelector('.start'),
    stopBtn = document.querySelector('.stop'),
    pauseBtn = document.querySelector('.pause'),
    lapBtn = document.querySelector('.lap');

let hours = 00,
    minutes = 00,
    seconds = 00,
    milliseconds = 00,
    interval,
    counter = 0,
    disabled = true;

//Listeners
startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    clearStopwatch();

    disableBtn();
});

lapBtn.addEventListener('click', () => {
    counter++;
    clearInterval(interval);
    const laps = document.querySelector('.laps-counter');
    const list = document.createElement('div');
    if (milliseconds < 9) {
        milliseconds = '0' + milliseconds;
    }
    if (seconds < 9) {
        seconds = '0' + seconds;
    }
    if (minutes < 9) {
        minutes = '0' + minutes;
    }
    if (hours < 9) {
        hours = '0' + hours;
    }
    list.innerText = `Lap ${counter}: ${hours}:${minutes}:${seconds}:${milliseconds}`;
    laps.append(list);
    clearStopwatch();
    clearInterval(interval);
    interval = setInterval(startStopwatch, 10);
});

function startStopwatch() {
    //milliseconds
    milliseconds++;
    if (milliseconds < 9) {
        millisecondsElement.innerText = '0' + milliseconds;
    }
    if (milliseconds > 9) {
        millisecondsElement.innerText = milliseconds;
    }
    if (milliseconds > 99) {
        seconds++;
        secondsElement.innerText = '0' + seconds;
        milliseconds = 0;
        millisecondsElement.innerText = '0' + milliseconds;
    }

    //seconds
    if (seconds > 9) {
        secondsElement.innerText = seconds;
    }
    if (seconds > 59) {
        minutes++;
        minutesElement.innerText = '0' + minutes;
        seconds = 0;
        secondsElement.innerText = '0' + seconds;
    }

    //minutes
    if (minutes > 9) {
        minutesElement.innerText = minutes;
    }
    if (minutes > 59) {
        hours++;
        hoursElement.innerText = '0' + hours;
        minutes = 0;
        minutesElement.innerText = '0' + minutes;
    }

    //hours
    if (hours > 9) {
        hoursElement.innerText = hours;
    }

    lapBtn.disabled = false;
}

function clearStopwatch() {
    hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;
    hoursElement.textContent = '00';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';

}

function disableBtn() {
    if (disabled) {
        lapBtn.disabled = true;
    }
}

disableBtn();