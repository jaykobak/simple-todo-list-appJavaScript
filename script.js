const allLists = []

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

function displayAllLists() {
    listGroup.innerHTML = ''

    for (i = 0; i < allLists.length; i++) {
        listGroup.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="todo${i + 1}" />
                    <label class="form-check-label" for="todo${i + 1}">${allLists[i]}</label>
                </div>
                <div>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Edit</button>
                    <button class="btn btn-sm btn-outline-danger" type="button">Delete</button>
                </div>
            </li>`
    }
}