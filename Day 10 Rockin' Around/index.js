const player = document.getElementById("player")
const buttons = document.querySelectorAll('.song-button')
const hideVideoButton = document.getElementById("hideVideoButton")

// This function will be triggered when the button is clicked
function handleButtonClick(event) {
        let clickedButtonId = event.target.id
        playSong(clickedButtonId)

}

// Add Event Listener to all button
for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleButtonClick)
}

// change the iframes' source
function playSong(id) {
        player.src = `https://www.youtube.com/embed/${id}?&autoplay=1&mute=1`
        player.click()
}

// Hide iframe
hideVideoButton.addEventListener('click', function () {
        if (player.style.display === "none") {
                player.style.display = "block"
                hideVideoButton.textContent = 'Hide The Video'
        } else {
                player.style.display = "none"
                hideVideoButton.textContent = 'Show The Video'
        }

})