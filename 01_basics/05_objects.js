
const mySymbol = Symbol("key1")
const mySymbol2 = Symbol("key2")

const User1 = {
    name: "Navodith Mondal",
    age: 20,
    [mySymbol]: "I am Plat",
    gender: "Male",
    address: "Howrah",
    holidays: ["Tuesday", "Sunday"]
}

User1.age = 21

// Object.freeze(User1)
User1.age = 50

// console.log(User1);

// console.log(User1["gender"]);
// console.log(User1[mySymbol]);

// User1.greeting = function(){
//     console.log("Hello JS user");
// }
// User1.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(User1.greeting());
// console.log(User1.greetingTwo());

// ---------------------

const User2 = {
    name: {
        first_name: "Dibbyarupp",
        last_name: "Dutta"
    },
    age: 21,
    [mySymbol2]: "I am Iron",
    gender: "Male",
    address: "Bojboj",
    holidays: ["Thursday", "Friday", "Saturday", "Sunday"]
}

// console.log(User2);


// --------------------

// const obj1 = Object.assign({}, User1, User2)
// const obj2 = {...User1, ...User2}

// console.log(obj1);

// console.log(Object.keys(User1));
// console.log(Object.values(User1));
console.log(Object.entries(User1));
console.log(Object.entries(User2));