const allLists = []
// Display all items to the screen
displayAllLists()

const addItem = () => {
    // Get users input
    const input = document.getElementById('userInput').value

    // Input Validation
    if (input.trim() == '') {
        alert("Please enter a valid input!")
    }

    else {
        allLists.push(input) // Store user input in array

        document.getElementById('userInput').value = '' // Clear input box

        displayAllLists()
    }
}

const deleteItem = (index) => {
    const userConfirmation = confirm("Are you sure you want to delete this item?")

    if (userConfirmation) {
        allLists.splice(index, 1) // Remove item from array
        displayAllLists()
    }

    else {
        displayAllLists()
    }
}

function displayAllLists() {
    if (allLists.length == 0) {
        listGroup.innerHTML = `<li class="list-group-item empty-state text-center py-4">
            <i class="bi bi-journal-check empty-icon" aria-hidden="true"></i>
            <p class="mb-0 mt-2 text-muted">Your list will be shown here</p>
        </li>`
    }

    else {
        listGroup.innerHTML = ''

        for (i = 0; i < allLists.length; i++) {
            listGroup.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="todo${i + 1}" />
                    <label class="form-check-label" for="todo${i + 1}">${allLists[i]}</label>
                </div>
                <div>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Edit</button>
                    <button onclick="deleteItem(${i})" class="btn btn-sm btn-outline-danger" type="button">Delete</button>
                </div>
            </li>`
        }
    }
}