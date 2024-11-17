const body = document.body;
const myDiv = document.createElement('div');
const myH1 = document.createElement('h1');
const myImg = document.createElement('img');

myDiv.classList.add("myDiv");


myH1.textContent = 'Hello, World!';

myH1.classList.add("myH1")
myH1.style.color = 'black';

myImg.classList.add("myImg");
myImg.src = 'https://images.pexels.com/photos/28847012/pexels-photo-28847012/free-photo-of-stunning-view-of-brussels-town-hall-in-belgium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ';


body.appendChild(myDiv);
myDiv.appendChild(myH1);
myDiv.appendChild(myImg); 