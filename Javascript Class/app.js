// Get the elements
const input = document.getElementById("inputNumber");
const validateText = document.getElementById("validationText");
const button = document.getElementById("submitButton");
const numbersContainer = document.getElementById("numbersContainer");

//Validate the user's input on button click
button.addEventListener("click", (event) => {
  //stop the page from refreshing
  event.preventDefault();

  //Take user input and change it to a number
  const inputValue = parseInt(input.value);

  //Validation for our input
  if (input.value === "") {
    validateText.textContent = "Please enter a value";
    validateText.className = "text-red-500 text-center mb-3 font-bold";
  } else if (isNaN(inputValue)) {
    validateText.textContent =
      "Please enter a valid number, not a string or symbol";
    validateText.className = "text-red-500 text-center mb-3 font-bold";
  } else {
    validateText.textContent = "";
  }
});
