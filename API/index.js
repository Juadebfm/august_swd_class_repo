const body  = document.body;

body.classList.add('text');

const fetchData = () => {
    const url = 'https://fakestoreapi.com/products';
    fetch(url)
    .then(response => response.json())
    .then((datas) =>  {
        console.log(datas);
        datas.forEach((data) => {
            const titleValue = data.title;
            const categoryValue = data.category;
            const image = data.image;
            const id = data.id;
            const price = data.price;


            const div = document.createElement('div');
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const h2 = document.createElement('h2');
            const img = document.createElement('img');
            const span = document.createElement('span');
            
            img.src = image;
            h1.textContent = titleValue;
            p.textContent = categoryValue;
            h2.textContent = id;
            span.textContent = `$${price}`;

            div.appendChild(h2);
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(h1);
            div.appendChild(span);
            body.appendChild(div);

        })
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', fetchData);