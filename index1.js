// Add a click event listener to the button
// When the button is clicked, the anonymous function runs
rollBtn.addEventListener("click", function() {

    // Get the value entered in the input field
    // .value returns a string, so we convert it to a Number
    const numofDice = Number(document.getElementById("numofDice").value);

    // Get the element where we will display the result
    const diceResult = document.getElementById("diceResult");

    // Create an empty array to store dice values
    const values = [];

    // Loop runs based on the number of dice entered
    for (let i = 0; i < numofDice; i++) {

        // Generate a random number between 1 and 6
        // * 6 → 0 to 5.999...
        // Math.floor() → 0 to 5 :+1 → 1 to 6
        const value = Math.floor(Math.random() * 6) + 1;

        // Add the generated number to the array
        values.push(value);
    }

    // Convert the array into a comma-separated string
    // Example: [2, 5, 3] → "2, 5, 3"
    // Then display it inside the result element
    diceResult.textContent = `Dice: ${values.join(", ")}`;

});