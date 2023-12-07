const wishlistEl = document.getElementById('wishlist');

let insertionCount = 1;
function handleKeyPress(event) {

        if ((event.keyCode === 13 || event.key === "Enter") && insertionCount <= 5) { // If the key pressed is Enter (keyCode 13 or key "Enter")
                insertionCount += 1
                let newLi = document.createElement('li')
                newLi.innerHTML = `<input onkeypress="handleKeyPress(event)" placeholder="Add Your Wish">`
                wishlistEl.append(newLi)
        }
}