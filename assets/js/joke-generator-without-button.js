
const windowContainer = document.getElementById("window-container");

windowContainer.addEventListener("mouseenter", function () {
        // Fetch a random dad joke as JSON
        fetch("https://icanhazdadjoke.com/", {
                headers: {
                        Accept: "application/json",
                },
        })
                .then((response) => response.json())
                .then((data) => {
                        // Access the joke from the response
                        const joke = data.joke;
                        document.getElementById("joke-display").innerHTML = `<p>${joke}</p>`;

                        // Animation for doors and joke display
                        document.querySelector(".left-door").style = "animation: left-open 1.5s forwards";
                        document.querySelector(".right-door").style = "animation: right-open 1.5s forwards";
                        document.querySelector(".joke-display").style = "animation: display-joke 1.5s forwards";
                })
                .catch((error) => {
                        console.error("Error fetching dad joke:", error);
                });
});

// Close door animation on mouse leave
windowContainer.addEventListener("mouseleave", function () {
        document.querySelector(".left-door").style = "animation: left-close 0.5s backwards";
        document.querySelector(".right-door").style = "animation: right-close 0.5s backwards";
        document.querySelector(".joke-display").style = "animation: close-joke 0.5s backwards";
});
