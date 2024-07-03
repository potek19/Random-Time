let usedSeconds = [];
let usedMinutes = [];
let usedHours = [];
const clockNow = new Date();
document.getElementById(`clock`).textContent = clockNow.toTimeString().split(' ')[0];
let second = clockNow.getSeconds().toString().padStart(2, `0`);
let minute = clockNow.getMinutes().toString().padStart(2, `0`);
let hour = clockNow.getHours().toString().padStart(2, `0`);


function getSeconds(){
    while(true){
        second = Math.floor(Math.random() * 61).toString().padStart(2, `0`);
        if (usedSeconds.length == 61) {
            usedSeconds = [];
            getMinutes();
        } else if (second == 60) {
            usedSeconds = [];
            getMinutes();
        } else if (usedSeconds.includes(second)) {
        } else {
            usedSeconds.push(second);
            console.log(`seconds: ` + usedSeconds);
            // let newClock = `${hour}:${minute}:${second}`;
            // console.log(newClock);
            break;
        }
    }
}

function getMinutes(){
    while(true){
        minute = Math.floor(Math.random() * 61).toString().padStart(2, `0`);
        if (usedMinutes.length == 61) {
            usedMinutes = [];
            getHours();
        } else if (minute == 60) {
            usedMinutes = [];
            getHours();
        } else if (usedMinutes.includes(minute)) {
        } else {
            usedMinutes.push(minute);
            console.log(`minutes: ` + usedMinutes);
            return minute;
        }
    }
}

function getHours(){
    while(true){
        hour = Math.floor(Math.random() * 24).toString().padStart(2, `0`);
        if (usedHours.length == 24) {
            usedHours = [];
        } else if (usedHours.includes(hour)) {
        } else {
            usedHours.push(hour);
            console.log(`hours: ` + usedHours);
            return hour;
        }
    }
}

function updateClock(){
    getSeconds();
    let newClock = `${hour}:${minute}:${second}`
    document.getElementById(`clock`).textContent = newClock;
}



setInterval(updateClock, 1000);