// Update name in color box as user types
document.getElementById('personName').addEventListener('input', function() {
    const personName = this.value.trim();
    const colourBoxText = document.getElementById('colourBoxText');
    
    if (personName === '') {
        colourBoxText.textContent = 'Welcome!';
    } else {
        colourBoxText.textContent = personName;
    }
});

function changeColour(colourName, colourCode) {
    // Get the colour box element using getElementById
    const colourBox = document.getElementById('colourBox');
    // Change the background colour
    colourBox.style.backgroundColor = colourCode;
    
    // Update the display text
    const colourDisplay = document.getElementById('colourDisplay');
    colourDisplay.textContent = 'Current colour: ' + colourName;
    
    // Update the input field with colour name
    const colourInput = document.getElementById('colourInput');
    colourInput.value = colourName;
    colourInput.style.color = colourCode;
}

function resetColour() {
    changeColour('Red', '#ff6b6b');
}
