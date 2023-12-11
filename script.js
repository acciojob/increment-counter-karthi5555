const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

        // Initialize the counter value
        let counterValue = 0;

        // Function to update the counter value and display an alert
        function incrementCounter() {
            // Display an alert with the un-incremented value
            alert(counterValue);

            // Increment the counter value
            counterValue++;

            // Update the counter element text content
            counterElement.textContent = counterValue;
        }

        // Attach the incrementCounter function to the click event of the button
        incrementButton.addEventListener('click', incrementCounter);