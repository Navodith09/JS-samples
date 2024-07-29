// for-of loop
// used for iterating over letters or elements of string or array.

let heroes = ["Iron-man", "Spider-man", "Thor", "Thanos", "Black Panther"];
// for (const hero of heroes) {
//     console.log(`Hello, ${hero}`);
// }

let villain = "Thanos";
// for (const vill of villain) {
//     console.log(`${vill}`);
// }



// maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(`${key} -- ${value}`);
// }



// for-in loop
// returns the key or index
// used for iterating over elements or keys of arrays or objects.

// const myObject = {
//     game: "GTA V",
//     launch: 2013
// }

// for (const key in myObject) {
//     console.log(`${key} :: ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const lang in programming) {
    console.log(`${programming[lang]}`);
}