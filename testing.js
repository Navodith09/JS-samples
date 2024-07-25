// for-loop syntax

// for(let i=1; i<=10; i++) {
//     console.log("Hello!");
// }

// for-of loop - used for iterating in Strings and Arrays.

// let word = "Navodith Mondal"
// for(let val of word) {
//     console.log(val);
// }

// for-in loop - used for iterating in Objects and Arrays.

// let student = {
//     name: "Navodith Mondal",
//     age: 21,
//     Languages: ["JavaScript", "Java", "Python"],
//     isPass: false
// };
// for(let key in student) {
//     console.log(key, " ", student[key]);
// }


let gameNum = 20;
let userNum = prompt("Guess the Number.");

while (userNum != gameNum) {
    console.log(userNum);
    console.log("Nope! Try again.");
    userNum = prompt("Guess again.")
}
console.log("Hurray! You guessed it correct. It is ", userNum);