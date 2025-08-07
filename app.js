// Take html tags into variables
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');
const display = document.querySelector('#display');

// set values initialy
let hours = 0;
let mins = 0;
let secs = 0;

// set a variable to store interval function and set the value as null
let timerID = null;

// make a counter function
function counter() {

    // increase seconds part
    secs++
    
    // set pattern for single numbers
    let hour = hours < 10 ? '0' + hours : hours;
    let min = mins < 10 ? '0' + mins : mins;
    let sec = secs < 10 ? '0' + secs : secs;

    // make a nested if-else condition like clock
    // increase seconds and set limit
    if (secs > 59) {
        secs = 0;
        mins++;

        // increase minutes and  set limit
        if (mins > 59) {
            mins = 0;
            hours++;

            // set limit to hours
            if (hour > 23) {
                hours = 0;
            }
        }
    }

    // print the values inside display
    display.textContent = `${hour}:${min}:${sec}`;
}

// link the function with start button
startBtn.addEventListener('click' , () => {

    // check the timerID value
    if (timerID !== null) {
        // if false then no changes in function
        return
    }

    // set interval inside the timerID variable
    timerID = setInterval(counter, 1000)
})

// modify the function on pause button clicked
pauseBtn.addEventListener('click' , () => {

    // clear interval
    clearInterval(timerID); // cause the interval was stored in timerID

    // set the timerID value  to null that will not affect the start button function
    timerID = null;
})

// reset button  functionality
resetBtn.addEventListener('click' , () => {

    // clear interval & set the timerID value to null
    clearInterval(timerID);
    timerID = null;

    // reset the values
    hours = 0;
    mins = 0;
    secs = 0;

    // reset the display content
    display.textContent = '00:00:00';
})