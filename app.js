const body = document.body;
const myDiv = document.createElement('div');
const myH1 = document.createElement('h1');
const myImg = document.createElement('img');
body.appendChild(myDiv);
myDiv.appendChild(myH1);
myDiv.appendChild(myImg);

myDiv.style.backgroundColor = '#0000ff';

myH1.textContent = 'Hello, World!';
myH1.style.color = 'white';

myImg.src = 'https://picsum.photos/200/300';