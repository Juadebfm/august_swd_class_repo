# What is Local Storage?

Think of Local Storage like a small notebook that lives inside the user's web browser. This notebook can store information that stays even after the user closes the webpage or refreshes the browser.

## Key Characteristics:

- Stores data on the user's computer
- Persists even after the browser is closed
- Can hold strings of data
- Specific to the website (domain)
- Typically stores up to 5-10 MB of data

## How to Use Local Storage:

- Storing Data: localStorage.setItem()

```js
localStorage.setItem("key", "value");
localStorage.setItem("username", "JohnDoe");
localStorage.setItem("lastVisit", "November 30, 2024");
```

The first argument is the "key" (like a label)
The second argument is the "value" (the actual data)
Both must be strings

- Retrieving Data: localStorage.getItem()

javascriptCopy// Syntax: localStorage.getItem("key")
const username = localStorage.getItem("username");
console.log(username); // Outputs: "JohnDoe"

You use the key to retrieve the stored value

Real-World Example in Our Number Generator:
javascriptCopy// Storing generated numbers
localStorage.setItem("numberSpans", numberContainer.innerHTML);

// Retrieving stored numbers when page loads
window.addEventListener("load", () => {
const storedSpans = localStorage.getItem("numberSpans");
if (storedSpans) {
numberContainer.innerHTML = storedSpans;
}
});
Practical Use Cases:

Remembering user preferences
Saving form data
Storing game progress
Caching frequently used data

Limitations:

Only stores strings
Limited storage space
Not secure for sensitive information

Tips for Beginners:

Use JSON to store complex data
Always check if data exists before using
Clear data when no longer needed
