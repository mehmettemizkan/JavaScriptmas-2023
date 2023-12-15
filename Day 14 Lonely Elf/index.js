const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const warning = document.getElementById('warning')
const resetButton = document.getElementById("resetButton")
const heading = document.getElementById("heading")

btn.addEventListener("click", duplicateElf)

let elfNumbers = 1
function duplicateElf() {

        let oldEmogi = elf.innerHTML
        let newEmogi = oldEmogi

        newEmogi += oldEmogi
        elfNumbers *= 2
        if (elfNumbers == 2) {
                heading.innerText += ' (Not anymore)'
        }
        if (elfNumbers <= 100) {
                elf.innerHTML = newEmogi
        } else {
                warning.innerHTML = "The number of elves cannot doubles to more than 100."
        }

}

resetButton.addEventListener('click', function () {
        location.reload();
})
