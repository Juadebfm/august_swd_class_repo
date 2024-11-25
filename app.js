// types of function

// function declaration
// function myFunc() {}

// arrow function
// const myfunc2 = () => (r)

// write a function that checks if a number is even or odd

// const checkNumber = (num) => num % 2 === 0 ? `${num} is even` : `${num} is odd`
// console.log(checkNumber(2))

// function checkNumber(num){
//     const logic = num % 2 === 0;

//     if(logic === true){
//         console.log(`${num} is even`);
//     }
//     else{
//         console.log(`${num} is odd`);
//     };
//     return logic;
// }




// function that checks weather and returns a message to the user

// function checkRain(stats){
//  if (stats === "raining") {
//     console.log("please wear a raincoart")
//  }
//  else if (stats === "sunny"){
//     console.log("please carry an umbrella")
//  }
//  else if (stats === "cloudy"){
//     console.log("please stay home")
//  }
//  return stats
// };

// console.log(checkRain("cloudy"));




// function checkDayStatus(day) {
//     if (day.toLowerCase() === "monday") {
//       console.log("Mon Week Day");
//     } else if (day.toLowerCase() === "tuesday") {
//       console.log("Tue Week Day");
//     } else if (day.toLowerCase() === "wednesday") {
//       console.log("Wed Week Day");
//     } else if (day.toLowerCase() === "thursday") {
//       console.log("Thur Week Day");
//     } else if (day.toLowerCase() === "friday") {
//       console.log("TGIF");
//     } else if (day.toLowerCase() === "saturday") {
//       console.log("Sat Weekend");
//     } else if (day.toLowerCase() === "sunday") {
//       console.log("Sun Weekend");
//     } else {
//       console.log("No such day in the week");
//     }

//     return day;
//   }

//   console.log(checkDayStatus("tuesday"));






// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Mon Week Day");
//     break;
//   case "tuesday":
//     console.log("tue Week Day");
//     break;
//   case "wednesday":
//     console.log("wed Week Day");
//     break;
//   case "thursday":
//     console.log("thur Week Day");
//     break;
//   case "friday":
//     console.log("fri Week Day");
//     break;
//   case "saturday":
//     console.log("sat Week Day");
//     break;
//   case "sunday":
//     console.log("sun Week Day");
//     break;
//   default:
//     console.log("No such day in the week");
// }






// const myWeatherStats = (weather) => {
//   switch (weather.toLowerCase()) {
//     case "raining":
//       console.log("please wear a raincoat");
//       break;
//     case "sunny":
//       console.log("please carry an umbrella");
//       break;
//     case "cloudy":
//       console.log("please stay home");
//       break;
//     default:
//       console.log("your weather stats is not clear");
//   }
//   return weather;
// };

// console.log(myWeatherStats("fgjrikbfobfk"));
