// object has two ways to define
// singletone
// literal

const mySymbol = Symbol('id')

const myObject = {
    name : "Avinash",
    "full_name": "Parchake",
    age : 21,
    [mySymbol]: 23,
    email :"avinash@gamil.com",
    location: "Pune",
    isLoggedIn : false,
    lastlogindays : ["Monday","friday"]

}

myObject.location = "Chandrapur"

console.log(myObject['location'])
console.log(myObject.location)

// we can loc object if we want
Object.freeze(myObject)
// try to change location object
myObject.location = "Pune"

console.log(myObject)

// symbol accessl
// console.log(typeof myObject[mySymbol])

// console.log(myObject['location']);
// console.log(myObject.email);

// console.log(myObject.full_name);


