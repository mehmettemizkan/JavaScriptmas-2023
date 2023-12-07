const addButtonEl = document.getElementById('add-button')
const createButtonEl = document.getElementById('create-button')
const inputFieldEl = document.getElementById('input-field')
const shoppingListEl = document.getElementById('people-list') // ul
const peopleList = []
const secretSantaPairsEl = document.getElementById('secret-santa-pairs');

addButtonEl.addEventListener('click', function () {
        let inputValue = inputFieldEl.value
        shoppingListEl.innerHTML += `<li>${inputValue} </li>`
        peopleList.push(inputValue)

        clearInputFieldEl() // inputFieldEl.value = ''
})

createButtonEl.addEventListener('click', function () {
        const pairsObj = generateSecretSantaPairs(peopleList);
        displaySecretSantaPairs(pairsObj);

})

function generateSecretSantaPairs(arr) {
        let shuffledPeople = shuffleArray(arr.slice()); // Create a shuffled copy of the array
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
                let currentPerson = arr[i];
                let pairOfCurrentPerson = shuffledPeople[i];
                obj[currentPerson] = pairOfCurrentPerson;
        }

        return obj;
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
                let j;
                do {
                        j = Math.floor(Math.random() * (i + 1));
                } while (i === j);
                [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
}

function displaySecretSantaPairs(pairsObj) {
        clearSecretSantaPairsEl();


        for (const person in pairsObj) {
                const pair = pairsObj[person];
                secretSantaPairsEl.innerHTML += `<li><span>${person}</span><span>${pair}</span></li>`;
        }
}



function clearInputFieldEl() {
        inputFieldEl.value = ""
}
function clearShoppingListEl() {
        shoppingListEl.innerHTML = ""
}
function clearSecretSantaPairsEl() {
        secretSantaPairsEl.innerHTML = '';
}