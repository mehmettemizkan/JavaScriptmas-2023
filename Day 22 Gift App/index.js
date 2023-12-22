import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
        databaseURL: 'https://javascrimba-day22-gift-app-default-rtdb.europe-west1.firebasedatabase.app/' // write your own database link
}

let app, database, peopleListInDB;
try {
        app = initializeApp(appSettings)
        database = getDatabase(app)
        peopleListInDB = ref(database, "peopleList")
} catch (error) {
        console.error("Firebase initialization error:", error);
}


const addButtonEl = document.getElementById("add-button")
const inputFieldEl = document.getElementById("input-field")
const peopleListEl = document.getElementById("people-list")

addButtonEl.addEventListener("click", function () {
        let inputValue = inputFieldEl.value

        if (inputValue) {
                push(peopleListInDB, inputValue) // push the name from input to the database

                clearInputFieldEl()
        }
})


// onValue: fetch data from the database
onValue(peopleListInDB, function (snapshot) {
        if (!snapshot.exists()) {
                peopleListEl.innerHTML = "No items here... yet"
        } else {
                let itemsArray = Object.entries(snapshot.val())

                clearPeopleListEl()
                itemsArray.forEach(person => {
                        appendPersonToPeopleListEl(person)
                });
        }
})

function clearPeopleListEl() {
        peopleListEl.innerHTML = ""
}

function clearInputFieldEl() {
        inputFieldEl.value = ""
}

function appendPersonToPeopleListEl(person) {
        let personId = person[0]
        let personName = person[1]

        let newEl = document.createElement("li")
        newEl.textContent = personName
        peopleListEl.append(newEl)

        // remove item from the database
        newEl.addEventListener("dblclick", function () {
                const exactLocationOfItemInDB = ref(database, `peopleList/${personId}`)
                remove(exactLocationOfItemInDB)
                showGif()
                topHeader.innerHTML = personName
                topHeader.className = 'topHeader'
        })
}

// gif
function showGif() {
        // const gif = document.getElementById('myGif');
        topGif.style.display = 'inline';

        // const image = document.getElementById('myImg')
        topImage.style.display = 'none'
}
