import JSConfetti from 'js-confetti'

const wordsArray = [
        "apple", "banana", "cherry", "orange", "grape",
        "watermelon", "kiwi", "strawberry", "blueberry", "raspberry",
        "pineapple", "mango", "peach", "plum", "apricot",
        "blackberry", "pomegranate", "lemon", "lime", "avocado",
        "pear", "melon", "fig", "date", "kiwi",
        "coconut", "nectarine", "tangerine", "papaya", "passionfruit",
        "guava", "cantaloupe", "dragonfruit", "persimmon", "starfruit",
        "rhubarb", "boysenberry", "cranberry", "elderberry", "gooseberry",
        "huckleberry", "loganberry", "mulberry", "olive", "peanut",
        "almond", "cashew", "walnut", "pecan", "hazelnut",
        "pistachio", "macadamia", "chestnut", "acorn", "pepper",
        "cinnamon", "ginger", "turmeric", "cloves", "nutmeg",
        "coriander", "cumin", "cardamom", "vanilla", "saffron",
        "basil", "thyme", "rosemary", "oregano", "parsley",
        "cilantro", "mint", "dill", "sage", "tarragon",
        "lavender", "chives", "marjoram", "bay", "fennel",
        "garlic", "onion", "shallot", "leek", "scallion",
        "carrot", "potato", "sweetpotato", "beet", "turnip",
        "radish", "rutabaga", "parsnip", "celery", "asparagus"
];
const randomIndex = Math.floor(Math.random() * wordsArray.length);

const word = wordsArray[randomIndex]
console.log(word)
const wordArr = word.split('')
const wordDisplay = document.getElementById('word-display')

document.addEventListener('submit', handleGuess)

function renderSpaces() {
        const wordHtml = wordArr.map(() => {
                return `<span class="letter">-</span>`
        })
        wordDisplay.innerHTML = wordHtml.join('')
}
renderSpaces()

function renderGuess(arr) {
        const wordHtml = arr.map((letter) => {
                return `<span class="letter">${letter}</span>`
        })
        wordDisplay.innerHTML = wordHtml.join('')
}

let currentState = wordArr.map(() => '-')
function handleGuess(e) {
        e.preventDefault()

        let input = document.getElementById('user-input')
        let guess = input.value
        const guessArr = guess.split('')
        wordArr.forEach((letter, index) => {
                if (currentState[index] === '-') {
                        if (letter === guessArr[index]) {
                                currentState[index] = letter
                        }
                }
        })

        renderGuess(currentState)
        checkWin(guess)
        input.value = ''
}

function checkWin(guess) {
        if (word === guess) {
                const jsConfetti = new JSConfetti()
                jsConfetti.addConfetti({
                        emojis: ['🧑‍🎄', '🎅'],
                        emojiSize: 50,
                        confettiNumber: 60,
                        confettiRadius: 6,
                })
                jsConfetti.addConfetti()
        }
}
