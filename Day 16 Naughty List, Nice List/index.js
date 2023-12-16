function addItem(event) {
        if (event.key === "Enter") {
                addNewItem()
        }
}

function addNewItem() {
        let newItemInput = document.getElementById('newItemInput');
        let newItemValue = newItemInput.value.trim();

        if (newItemValue !== "") {
                let newItem = document.createElement('div');
                newItem.textContent = newItemValue;
                newItem.className = 'drag-item';
                newItem.draggable = true;
                newItem.id = 'item' + (document.querySelectorAll('.drag-item').length + 1);

                // Re-define the dragstart event to add the drag feature
                newItem.addEventListener('dragstart', function (e) {
                        e.dataTransfer.setData('text/plain', newItem.id);
                });

                // Get the selected radio button
                let niceRadio = document.getElementById('niceRadio');
                let isNice = niceRadio.checked;
                if (isNice) {
                        // Append the new item to dragContainer1
                        document.getElementById('dragContainer1').insertBefore(newItem, document.getElementById('dragContainer1').firstChild);
                } else {
                        // Append the new item to dragContainer2
                        document.getElementById('dragContainer2').insertBefore(newItem, document.getElementById('dragContainer2').firstChild);
                }

                // Clear the input
                newItemInput.value = "";
        }
}

const dragContainer2 = document.getElementById('dragContainer2');

const dragContainers = document.querySelectorAll('.drop-area');

dragContainers.forEach(function (container) {
        container.addEventListener('dragover', function (e) {
                e.preventDefault();
        });


        container.addEventListener('drop', function (e) {
                e.preventDefault();

                // Get the dropped item's ID and move the dragged item
                const draggedItemId = e.dataTransfer.getData('text/plain');
                const draggedItem = document.getElementById(draggedItemId);

                const rect = container.getBoundingClientRect();
                const mouseY = e.clientY - rect.top;

                if (mouseY < rect.height / 2) {
                        // If below the top half of the target item, insert into
                        container.insertBefore(draggedItem, container.firstChild);
                } else {
                        // If above the bottom half of the target item, insert just below it
                        container.appendChild(draggedItem);
                }

                draggedItem.style.position = 'relative';
        });
});

var dragItems = document.querySelectorAll('.drag-item');

dragItems.forEach(function (item) {
        item.addEventListener('dragstart', function (e) {
                e.dataTransfer.setData('text/plain', item.id);
        });
});



/* BUTTONS */
const addButton = document.getElementById('addItem')
addButton.addEventListener('click', addNewItem)

const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click', function () {
        let itemsInContainer2 = document.querySelectorAll('#dragContainer2 .drag-item');
        let namesArray = Array.from(itemsInContainer2).map(item => ({
                id: item.id,
                textContent: item.textContent
        }));
        // Sort the names
        namesArray.sort((a, b) => a.textContent.localeCompare(b.textContent));

        // Clear the elements inside #dragContainer2
        dragContainer2.innerHTML = '';

        // Add the sorted names to #dragContainer2
        namesArray.forEach(function (item) {
                const div = document.createElement('div');
                div.textContent = item.textContent;
                div.className = 'drag-item'; // You can add this class if needed
                div.draggable = true; // You can make it draggable if needed
                div.id = item.id; // Add an ID to each element

                // Re-define the dragstart event to add the drag feature
                div.addEventListener('dragstart', function (e) {
                        e.dataTransfer.setData('text/plain', div.id);
                });

                dragContainer2.appendChild(div);
        });
});

const shuffleButton = document.getElementById('shuffle-button');
shuffleButton.addEventListener('click', function () {
        let itemsInContainer2 = document.querySelectorAll('#dragContainer2 .drag-item');
        let shuffledArray = Array.from(itemsInContainer2);

        // Shuffle the array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        // Clear the elements inside #dragContainer2
        dragContainer2.innerHTML = '';

        // Add the shuffled items back to #dragContainer2
        shuffledArray.forEach(function (item) {
                dragContainer2.appendChild(item);
        });
});
