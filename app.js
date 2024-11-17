// TASK 1 - get an html element using getElementByID and do the following to it.
// Change the bg to brown
// Change the text content
// Ensure you're using CSS class to make this changes with it applies

// TASK 2 - create a variable that takes in the summation of 2 numbers, get another html element and use the variable as the text content

const firstHTML = document.getElementById("firstHtml");
const secondHTML = document.getElementById("secondHtml");

const body = document.body;
body.classList.add("myBody");

const newDiv = document.createElement("div");

const newNewDiv = document.createElement("h1");

const myBoxImg = document.createElement("img");

myBoxImg.src =
  "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

myBoxImg.alt = "My Lovely Bike";

myBoxImg.classList.add("myImg");

newNewDiv.textContent = "My New Black Box Title";
newNewDiv.style.color = "white";

newDiv.textContent = "Julius";
newDiv.style.backgroundColor = "black";
newDiv.style.color = "white";
newDiv.style.padding = "50px";
firstHTML.classList.add("myClass");
firstHTML.textContent = "Bablablu";

newDiv.append(newNewDiv);
newDiv.append(myBoxImg);

body.append(newDiv);

const sum = 100 + 100;

secondHTML.textContent = sum;

// get the body in a variable
// create a div with blue background
// create an h1 and add it to the blue bg'd div
// create an img and add it to the blue bg'd div

const bodyElement = document.body;
const myBlueDiv = document.createElement("div");
const myHeading = document.createElement("h1");
const myImgS = document.createElement("img");

myBlueDiv.classList.add("blue_bg");

myHeading.style.fontSize = "40px";
myHeading.style.textTransform = "capitalize";
myHeading.textContent = "My Blue Div Heading";

myImgS.src =
  "https://images.pexels.com/photos/27054224/pexels-photo-27054224/free-photo-of-motorbike-parked-on-hill-on-sea-coast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
myImgS.alt = "My Bike";
myImgS.className = "imgStyle";

myBlueDiv.append(myHeading);
myBlueDiv.append(myImgS);
bodyElement.append(myBlueDiv);
