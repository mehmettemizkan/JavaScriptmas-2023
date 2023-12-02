const currentDate = new Date();
const christmas = new Date("Dec 25, 2023 00:00:00")

const countDownDate = christmas.getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Get the difference (in minutes) between local time an UTC time:
    const diff = currentDate.getTimezoneOffset();

    // Convert diff(minutes) to milliseconds
    const diffMilliseconds = diff * 60000;

    now = now + diffMilliseconds;

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown-display"
    document.getElementById("countdown-display").innerHTML = `${days} days ${hours} hours<br>${minutes} mins ${seconds} secs`

    // If the count down is over, celebrate christmas 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-display").innerHTML = "MERRY CHRISTMAS!";
    }
}, 1000);