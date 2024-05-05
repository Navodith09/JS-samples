const arr = [1, 2, 3, 4, 5]

arr.push(6)
arr.pop()

arr.unshift(10) // adds element in top
arr.shift() // removes element from top

// console.log(arr.includes(5));
// console.log(arr.indexOf(10));

const newArr = arr.join() // returns in string

// console.log(arr);
// console.log(newArr);


// slice, splice...

// console.log("a", arr);

// const ar1 = arr.slice(1,3)
// console.log(ar1);
// console.log("b", arr);

// const ar2 = arr.splice(1,3)
// console.log(ar2);
// console.log("c", arr);


const cities1 = ["jaipur", "ahmedabad", "mumbai"]
const cities2 = ["kolkata", "bhuvaneshwar", "darjeeling"]

// console.log(cities1);

const newCities = cities1.concat(cities2)
const new_cities = [...cities1, ...cities2]

// console.log(new_cities);

const ar3 = [1, 2, 3, [4, 5, [6, [7, 8]]]]
const ar4 = ar3.flat(Infinity)

// console.log(ar4);

console.log(Array.from("IRIS"));

let x = 100
let y = 200
let z = 300

console.log(Array.of(x, y, z));