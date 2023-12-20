const dangerArray = [
        ["🎅", "👺"],
        [
                ["🎅", "🦁", "🧛🏿"],
                ["👹", "🎅"]
        ],
        [
                [
                        ["🎅", "🐻", "🤖"],
                        ["🦹‍♀️", "👿", "🎅", "👾"]
                ],
                [
                        ["🐯", "🎅"],
                        ["👹", "🤖", ["🧛", "🎅"], "😈"]
                ]
        ]
];

const saveBtn = document.getElementById('save-button')
saveBtn.addEventListener('click', removeNonSantaElements)

function removeNonSantaElements() {
        const snowfallContainer = document.getElementById('snowfall-container');
        if (snowfallContainer) {
                // Remove items other than 🎅
                const filteredArray = dangerArray.flat(Infinity).filter(element => element === '🎅');

                // Clear snowfall content
                snowfallContainer.innerHTML = '';

                // Create new snowfall content
                addSnowflakesToContainer(filteredArray, snowfallContainer);
        } else {
                console.error("Snowfall container not found!");
        }
        document.body.style.backgroundImage = "url('../assets/img/free-santa.jpeg')";
        // saveBtn.style.display = 'none'
        saveBtn.innerText = 'Santa saved'
}


function addSnowflakesToContainer(arr) {
        const snowfallContainer = document.getElementById('snowfall-container');

        function processArray(element) {
                if (Array.isArray(element)) {
                        element.forEach(processArray);
                } else {
                        const snowflakeElement = document.createElement('snowflake');
                        const spanElement = document.createElement('span');
                        spanElement.textContent = element;
                        snowfallContainer.appendChild(snowflakeElement);
                        snowflakeElement.appendChild(spanElement);
                }
        }

        arr.forEach(processArray);
}

addSnowflakesToContainer(dangerArray);