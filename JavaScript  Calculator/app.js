// Function to perform the calculation
function calculate(Numbers) {
    let num1 = document.getElementById('num1').value; 
    let num2 = document.getElementById('num2').value; 

    num1 = Number(num1);
    num2 = Number(num2);


    let result;

    if (Numbers === 'add') {
        result = num1 + num2; // Add the numbers
    } else if (Numbers === 'subtract') {
        result = num1 - num2; // Subtract the numbers
    }


    document.getElementById('result').textContent = 'Result: ' + result;
}
