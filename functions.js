// function num() {
//   let a = Math.random();
//   const reversednum = a.toString().split("").reverse().join("");
//   let b = Number(reversednum);
//   console.log(b);
// }
// num();
// Palindrome
// function pand(word) {
//   const arr = word.toLowerCase().split("");

//   if (arr[0] === arr[4] && arr[1] === arr[3] && arr[5]) {
//     console.log(`${word} is a 5 letter palindrome`);
//   } else if (arr[0] === arr[2] && arr[1] !== arr[3]) {
//     console.log(`${word} is a 3 letter palindrome`);
//   } else if (arr[0] === arr[3] && arr[1] === arr[2]) {
//     console.log(`${word} is a 4 letter palindrome`);
//   } else if (arr[0] === arr[5] && arr[1] === arr[4] && arr[2] && arr[3]) {
//     console.log(`${word} is a 6 letter palindrome`);
//   } else {
//     console.log(`${word} is not a palindrome`);
//   }
// }
// pand("Agga");
//Arrange string in alphabetical order
// function str(strg) {
//   const arr = strg.split("").sort().join("");
//   console.log(arr.toString().toUpperCase());
// }
// str("webmaster");
function str(strg) {
  const arr = strg.split("");
  const arro = arr[0].toUpperCase();
  const arr3 = arr[4].toUpperCase();
  const arr8 = arr[10].toUpperCase();
  const arr13 = arr[16].toUpperCase();
  const newarr = [
    arro,
    "h",
    "e",
    "",
    arr3,
    "u",
    "i",
    "c",
    "k",
    "",

    arr8,
    "r",
    "o",
    "w",
    "n",
    "",

    arr13,
    "o",
    "x",
  ];

  console.log(newarr.join("").toString(""));
}
str("the quick brown fox");
