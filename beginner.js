// function isEven(a) {
//   result = a % 2 === 0;
//   return result ? `${a} is even` : `${a} is odd`;
// }
// console.log(isEven(1001));
// function chechNumber(a) {
//   const logic = a % 2 === 0;
//   if (logic) {
//     console.log(`${a} is even`);
//   } else {
//     console.log(`${a} is odd`);
//   }
//   return logic;
// }
// // console.log(chechNumber(100));
// // chechNumber(100);
// function user(user) {
//   if (user.toLowerCase() === "rainy") {
//     console.log(`It is ${user} wear a rain coat`);
//   } else if (user.toLowerCase() === "sunny") {
//     console.log(`It is ${user} carry umbrella`);
//   } else {
//     console.log(`It is ${user} stay at home`);
//   }
//   return user;
// }

// console.log(user("cloudy"));
// const mydhb1 = Math.random();
// const mydhb = Math.round(mydhb1);
// console.log(mydhb * 10000000);

// function checkDay(day) {
//   switch (day.toLowerCase()) {
//     case "monday":
//       console.log("Today is Monday");
//       break;
//     case "tuesday":
//       console.log("Today is Tuesday");
//       break;
//     case "wednesday":
//       console.log("Today is Wednesday");
//       break;
//     case "thursday":
//       console.log("Today is Thursday");
//       break;
//     case "friday":
//       console.log("Today is Friday");
//       break;
//     case "saturday":
//       console.log("Today is Saturday");
//       break;
//     case "sunday":
//       console.log("Today is Sunday");
//       break;
//     default:
//       console.log("It is not a week day.");
//   }
// }
// checkDay("monday");

// const checkWeather = (weather) => {
//   switch (weather.toString().toLowerCase()) {
//     case "rainy":
//       console.log("It is rainy you need a rain coat");
//       break;
//     case "sunny":
//       console.log("It is sunny you are fine");
//       break;
//     case "cloudy":
//       console.log("It ia cloudy stay at home ");
//     default:
//       console.log("Invalid Input ");
//   }
//   return weather;
// };
// checkWeather(234);
// try {
//   let lastName = "samari";
//   let fullName = fistName + "" + lastName;
// } catch (err) {
//   console.log("Name of the error", err.name);
//   console.log("Message of the error", err.message);
// } finally {
//   console.log("In any case i will be executed");
// // }
// const throwErrorExampleFun = () => {
//   let message;
//   let x = prompt("Enter a number: ");
//   try {
//     if (x == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
//   } catch (err) {
//     console.log(err);
//   }
// };
// throwErrorExampleFun();

// const body = document.body;
// body.classList.add("example");

// const fetchData = () => {
//   const url = "http://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((response) => response.json())
//     .then((datas) => {
//       console.log(datas);
//       datas.forEach((data) => {
//         const div = document.createElement("div");
//         const h2 = document.createElement("h2");
//         const h1 = document.createElement("h1");
//         const myh3 = document.createElement("h3");
//         h1.textContent = data.id;
//         myh3.textContent = data.body;
//         h2.textContent = data.title;
//         div.appendChild(h1);
//         div.appendChild(myh3);
//         div.appendChild(h2);
//         body.appendChild(div);
//       });
//     })
//     .catch((error) => console.log(error));
// };
// document.addEventListener("DOMContentLoaded", fetchData);
const body = document.body;
body.classList.add("example");

const fetchData = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      console.log(datas);
      datas.forEach((data) => {
        const mydiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const h1 = document.createElement("h1");
        const myh3 = document.createElement("h3");
        const myimg = document.createElement("img");
        h1.textContent = data.id;
        myimg.src = data.image;
        myimg.className = "imgstyle";
        mydiv.classList.add("productCard");
        myh3.textContent = `$${data.price}`;

        h2.textContent = data.title;
        mydiv.appendChild(h1);
        mydiv.appendChild(myh3);
        mydiv.appendChild(myimg);
        mydiv.appendChild(h2);
        body.appendChild(mydiv);
      });
    })
    .catch((error) => console.log(error));
};
document.addEventListener("DOMContentLoaded", fetchData);
