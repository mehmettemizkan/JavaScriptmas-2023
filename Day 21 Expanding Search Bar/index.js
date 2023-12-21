const searchInput = document.getElementById('search-field')

// when mouse focus the input
searchInput.addEventListener('focus', function () {
        searchInput.removeAttribute('placeholder')
})

// when the input loses focus
searchInput.addEventListener('blur', function () {
        if (!searchInput.value) {
                searchInput.setAttribute('placeholder', 'Search...')
        }
})