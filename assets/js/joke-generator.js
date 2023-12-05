document
        .getElementById("window-container")
        .addEventListener("click", function () {

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
                                document.getElementById("joke-display").innerHTML = `
    
        <p>${joke}</p>
    
        `;
                        })
                        .catch((error) => {
                                console.error("Error fetching dad joke:", error);
                        });

                // END OF API FETCH

                document.querySelector(".left-door").style =
                        "animation: left-open 0.3s forwards";
                document.querySelector(".right-door").style =
                        "animation: right-open 0.3s forwards";
                document.querySelector(".joke-display").style =
                        "animation: display-joke 0.3s forwards";

        });

const closeDoor = document.getElementById("close-door");

closeDoor.addEventListener("click", closeDoorFunction);

function closeDoorFunction() {
        document.querySelector(".left-door").style =
                "animation: left-close 0.3s backwards";
        document.querySelector(".right-door").style =
                "animation: right-close 0.3s backwards";
        document.querySelector(".joke-display").style =
                "animation: close-joke 0.3s backwards";
}
