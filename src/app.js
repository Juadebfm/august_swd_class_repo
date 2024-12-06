// Call the elements
const inputIds = ["inputNumberA", "inputNumberB"];
const buttonIds = ["submitButtonA", "submitButtonB"];
const validationTextIds = ["validationTextA", "validationTextB"];
const resultSection = document.getElementById("resultSection");

// Loop through the IDs
inputIds.forEach((inputId, index) => {
  const input = document.getElementById(inputId);
  const button = document.getElementById(buttonIds[index]);
  const validateText = document.getElementById(validationTextIds[index]);

  // Clear validation text when the user starts typing
  input.addEventListener("input", () => {
    validateText.textContent = "";
  });

  button.addEventListener("click", (event) => {
    // Prevent the page from refreshing
    event.preventDefault();

    const value = parseFloat(input.value);

    // Validate the input
    if (input.value === "") {
      validateText.textContent = "Please enter a valid number";
      validateText.className = "text-red-500 text-center mb-3 font-bold";
      return;
    } else if (isNaN(value)) {
      validateText.textContent = "Please enter a valid number, not a symbol";
      validateText.className = "text-red-500 text-center mb-3 font-bold";
      return;
    }

    // Clear validation message once input is valid
    validateText.textContent = "";

    // Get the value of the other input directly using the opposite index
    let otherInputValue;
    if (index === 0) {
      otherInputValue = parseFloat(document.getElementById("inputNumberB").value); // Get the value from inputNumberB
    } else {
      otherInputValue = parseFloat(document.getElementById("inputNumberA").value); // Get the value from inputNumberA
    }

    // Check if the other input is valid
    if (isNaN(otherInputValue)) {
      validateText.textContent = "Please enter a valid number in the other field";
      validateText.className = "text-red-500 text-center mb-3 font-bold";
      return;
    }

    // Now that both inputs are valid, perform the calculation
    let result;
    if (button.id === "submitButtonA") {
      result = value + otherInputValue;
      resultSection.textContent = `Sum: ${result}`;
    } else if (button.id === "submitButtonB") {
      result = otherInputValue - value;
      resultSection.textContent = `Difference: ${result}`;
    }
  });
});
