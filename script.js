// function getRandomSecond(){
//     let usedSeconds = [];
//     let second;
//         function randomSecond(){
//             second = Math.floor(Math.random()*10)
//             if(usedSeconds.includes(second)){
//                 console.log(`duplicate number ${second}`)
//                 second = Math.floor(Math.random()*10);
//             }
//             else if(second === 9){
//                 usedSeconds = [];
//                 console.log(`run hour function`)
//             }
//             else{
//             usedSeconds.push(second)
//             console.log(usedSeconds)
//             }
//         }
//     return randomSecond
// }

// setInterval(getRandomSecond(), 1000)

// function getRandomSecond(){
//     let usedSeconds = [];
//     function randomSecond(){
//         let second;
//         do{
//             second = Math.floor(Math.random()*10)
//             if(usedSeconds.includes(second)){
//                 console.log(`duplicate number ${second}`)
//             }
//         }
//         while(usedSeconds.includes(second))

//         usedSeconds.push(second);
//         console.log(usedSeconds)
//     }
//     return randomSecond
// }

// setInterval(getRandomSecond(), 5000)

// let minutes;
// let usedMinutes = [];
// let hours;
// let usedHours = [];


// let second;
// let usedSeconds = [];

// function getSeconds(){
//     second = Math.floor(Math.random()*10)
//     if(second == 9){
//         usedSeconds = [];
        
//         console.log(second);
//         console.log(usedSeconds);
//         //Call minute function
//     }
//     else if(usedSeconds.length == 60){
//         usedSeconds = []
        
//         console.log(second);
//         console.log(usedSeconds);
//         //Call minute function
//     }
//     else if(usedSeconds.includes(second)){
//         do {
//             second = Math.floor(Math.random()*10)
//             usedSeconds.push(second)
//         }while(usedSeconds.includes(second));
        
//         console.log(second);
//         console.log(usedSeconds);
//         }
// }


let usedSeconds = [];

function getSeconds(){
    while(true){
        second = Math.floor(Math.random()*10);
        
        if (usedSeconds.length == 10){
            usedSeconds = [];
            console.log(`full array, resetting ${usedSeconds.length}`);
        } else if (second == 9){
            usedSeconds = [];
            console.log(`got number ${second}, reseting array`);
        } else if (usedSeconds.includes(second)){
            console.log(`number ${second} already in array`);
            console.log(usedSeconds);
        } else {
            usedSeconds.push(second);
            console.log(`new number: ${second}`);
            console.log(usedSeconds);
            return second;
        }
    }
}

setInterval(getSeconds, 1000)

