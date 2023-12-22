let people = []

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const peopleListEl = document.getElementById("people-list")

addButtonEl.addEventListener("click", function () {
        let inputValue = inputFieldEl.value

        if (inputValue) {
                people.push(inputValue)

                clearInputFieldEl()

                renderList(people)
        }
})

function renderList(array) {
        clearPeopleListEl()

        for (let i = 0; i < array.length; i++) {
                let currentPerson = array[i]

                appendPersonToPeopleListEl(currentPerson)
        }
}

function clearPeopleListEl() {
        peopleListEl.innerHTML = ""
}

function clearInputFieldEl() {
        inputFieldEl.value = ""
}

function appendPersonToPeopleListEl(person) {

        let newEl = document.createElement("li")

        newEl.textContent = person

        newEl.addEventListener("dblclick", function () {
                let index = people.indexOf(person)

                people.splice(index, 1)

                renderList(people)
        })

        peopleListEl.append(newEl)
}