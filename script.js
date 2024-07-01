let usedSeconds = [];
let usedMinutes = [];
let usedHours = [];


function getSeconds(){
    while(true){
        let second = Math.floor(Math.random() * 10);
        if (usedSeconds.length === 10) {
            usedSeconds = [];
            getMinutes();
            // Call getMinutes function here
            // console.log(`full array, resetting ${usedSeconds.length}`);
        } else if (second === 9) {
            usedSeconds = [];
            getMinutes();
            // Call getMinutes function here
            // console.log(`got number ${second}, resetting array`);
        } else if (usedSeconds.includes(second)) {
            // console.log(`number ${second} already in array`);
            // console.log(usedSeconds);
        } else {
            usedSeconds.push(second);
            console.log(`Second: ${second}, in array ${usedSeconds}`);
            return second;
        }
    }
}

function getMinutes(){
    while(true){
        let minute = Math.floor(Math.random() * 10);
        if (usedMinutes.length === 10) {
            usedMinutes = [];
            getHours();
            // console.log(`full array, resetting ${usedSeconds.length}`);
        } else if (minute === 9) {
            usedMinutes = [];
            getHours();
            // console.log(`got number ${second}, resetting array`);
        } else if (usedMinutes.includes(minute)) { // Number already in array, runs .random again
        } else {
            usedMinutes.push(minute);
            console.log(`Minute: ${minute}, in array ${usedMinutes}`);
            return minute;
        }
    }
}



setInterval(getSeconds, 1000);

function getHours(){
    while(true){
        let hour = Math.floor(Math.random() * 10);
        if (usedHours.length === 10) {
            usedHours = [];
        } else if (usedHours.includes(hour)) { // Number already in array, runs .random again
        } else {
            usedHours.push(hour);
            console.log(`Hour: ${hour}, in array ${usedHours}`);
            return hour;
        }
    }
}



