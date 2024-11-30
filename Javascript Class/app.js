const fruits = [
  "Mango",
  "Banana",
  "Guava",
  "Orange",
  "Pineapple",
  "Apple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Peach",
];

// Traditional for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Fruit Number ${i + 1} : ${fruits[i]}`);
// }

// For Of
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// New loop methods
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.forEach((num) => {
  console.log(num * num);
});
