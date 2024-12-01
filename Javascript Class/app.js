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
  }
  
  else if (isNaN(inputValue)) {
    validateText.textContent =
      "Please enter a valid number, not a string or symbol";
    validateText.className = "text-red-500 text-center mb-3 font-bold";
  } 
  
  else if (input.value > 500) {
    validateText.textContent = "Please enter a number not more than 500";
    validateText.className = "text-red-500 text-center mb-3 font-bold";
  } 
  
  else if (input.value < 0) {
    validateText.textContent =
      "Please enter a positive number not a negative one";
    validateText.className = "text-red-500 text-center mb-3 font-bold";
  } 
  
  else {
    validateText.textContent = "";
    numbersContainer.innerHTML = "";
    // write a loop that generates numbers
    for (let i = 1; i <= inputValue; i++) {
      const span = document.createElement("span");
      span.textContent = i;
      // style the span
      const commonClasses = [
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "border-2",
        "rounded",
      ];

      // style for even or odd numbers
      const colorClasses =
        i % 2 === 0
          ? ["border-green-500", "text-green-500"]
          : ["border-red-500", "text-red-500"];

      //add all classes to the span created
      span.classList.add(...commonClasses, ...colorClasses);

      // Store the number spans in the localstorage
      numbersContainer.appendChild(span);
    }

    //store the number spans in the local storage
    localStorage.setItem("numberSpans", numbersContainer.innerHTML);
    // innerHtml
  }
});

// show saved number spans at page load
window.addEventListener("load", () => {
  const storedSpans = localStorage.getItem("numberSpans");
  if (storedSpans) {
    numbersContainer.innerHTML = storedSpans;
  }
});

// clear validation text when user starts typing
input.addEventListener("input", () => {
  validateText.textContent = "";
});

//Clear the input field on page refresh
window.addEventListener("beforeunload", () => {
  input.value = "";
});
