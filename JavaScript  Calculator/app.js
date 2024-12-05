// Function to perform the calculation
function calculate(Numbers) {
    // Get the values entered in the input fields and convert them to numbers
    let num1 = document.getElementById('num1').value; // Get the value of the first input
    let num2 = document.getElementById('num2').value; // Get the value of the second input


    // Convert the input values from strings to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Initialize a variable for the result
    let result;

    // Perform the calculation based on the button clicked
    if (Numbers === 'add') {
        result = num1 + num2; // Add the numbers
    } else if (Numbers === 'subtract') {
        result = num1 - num2; // Subtract the numbers
    }

    // Display the result in the paragraph with id "result"
    document.getElementById('result').textContent = 'Result: ' + result;
}
