// Get the HTMLCollection
var redLights = document.querySelectorAll('.lights.red');
var blueLights = document.querySelectorAll('.lights.blue');

// Toggle function for red lights
function toggleRedLights() {
        redLights.forEach(function (light) {
                light.classList.toggle('lights-on', document.getElementById('btnRed').checked);
        });
}

// Toggle function for blue lights
function toggleBlueLights() {
        blueLights.forEach(function (light) {
                light.classList.toggle('lights-on', document.getElementById('btnBlue').checked);
        });
}

// Toggle button event listeners
document.getElementById('btnRed').addEventListener('change', function () {
        toggleRedLights();
});

document.getElementById('btnBlue').addEventListener('change', function () {
        toggleBlueLights();
});