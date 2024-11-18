const world = document.getElementById("world");
let number = document.getElementById("number");
const body = document.body;
body.classList.add("myBody");
world.textContent = "Happiness is free";
world.classList.add("myWorld");

let num1 = 8;
let num2 = 4;

let result = num1 + num2;
number.textContent = result;

const imgDiv = document.createElement("div");
const myimg = document.createElement("img");

myimg.src = "https://images.pexels.com/photos/28847012/pexels-photo-28847012/free-photo-of-stunning-view-of-brussels-town-hall-in-belgium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
myimg.alt = "town hall"

myimg.classList.add("newImg");
imgDiv.append(myimg);
body.append(imgDiv);

// const myBlueDiv = document.createElement("div")
// const myh1 = document.createElement("h1")
// body.append (newDiv)

// newDiv.append (h1)
