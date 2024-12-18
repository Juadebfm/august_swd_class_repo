const body = document.body;

body.classList.add("test");

const fetchData = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);

      datas.forEach((data) => {
        //store value in singuar data inside an array
        const titleValue = data.title;
        const para = data.body;
        const productimg = data.image;

        //create element
        const div = document.createElement("div");
        const title = document.createElement("h1");
        const paragraph = document.createElement("p");
        const image = document.createElement("img");

        //use the values in the data as the text content
        title.textContent = titleValue;
        paragraph.textContent = para;
        image.src = productimg;
        //Add classlist to a image
        image;

        div.classList.add("cursor");
        //apppend new element to the div
        div.appendChild(title);
        div.appendChild(paragraph);
        div.appendChild(image);

        body.appendChild(div);
      });
    })
    .catch((error) => console.log(error));
};
document.addEventListener("DOMContentLoaded", fetchData);
