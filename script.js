const allLists = []

const addItem = () => {
    // Get users input
    const input = document.getElementById('userInput').value
    
    // Input Validation
    if (input.trim() == '') {
        alert("Please enter a valid input!")
    }

    else {
        // Store user input in array
        allLists.push(input)

        emptyState.innerHTML = ''
    }
}