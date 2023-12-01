

const currentDate = new Date();
const christmas = new Date("Dec 25, 2023 00:00:00")

var countDownDate = christmas.getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Get the difference (in minutes) between local time an UTC time:
    let diff = currentDate.getTimezoneOffset();
    // Convert diff(minutes) to milliseconds
    let diffMilliseconds = diff * 60000;

    now = now + diffMilliseconds;

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown-display").innerHTML = `${days} days ${hours} hours <br>${minutes} minutes ${seconds} seconds`

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-display").innerHTML = "EXPIRED";
    }
}, 1000);