const num = new Number(123.789)

// console.log(num);
// console.log(num.toString())
// console.log(num.toString().length);

// console.log(num.toFixed(2)); // returns how many zeros after decimal place
// console.log(num.toPrecision(3));

// Maths --------------------------------

const num2 = 123.456

// console.log(Math.round(num2));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(9.9));

// console.log(Math.random());

// console.log(Math.floor(Math.random()*10)+1); 
// This math logic will do -> 
// Math.random generates and random number everytime which is '0.something something'
// Multiplying that with 10 will remove the zero and bring the number one place in front.
// Math.floor will remove the rest of the decimal places and give only the number.
// +1 is optional at the end. Basically it will eliminate the chances of Zero as an output. Also there is a chance of getting 10 now.

/*
const min = 10
const max = 20

// If it is asked to take a range of minimum to maximum, then the math logic should be ->

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// +min at the end will let it return in 2-digits. Max range can only be acheived in this way, otherwise 1-digit output will come.

*/

// A simple logic to generate a random 4-digit number. Like an OTP ->
const min = 1000
const max = 9999

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 