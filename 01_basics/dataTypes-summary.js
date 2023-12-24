// #Primitive

// 7 types  : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail; // if u dont want to give any value leav it like this it will show undefined also u can set = undefined by yourself


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 345500220011003308151515151
//const bigNumber = 345500220011003308151515151n // if we add n at last it will take as BigInt




// Refernce type (Non primitive)

// Array, Objecs, Functions

//example of array,objects etc:-

const heros = ["shaktiman", "naggraj", "doga"]
let myObj = { 
    name: "jarvis",
    age: 21,
}

// Declare a function like varibale--

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // take others and check there typeof all const taken above.. then readDoc

// Read typeof more info-  https://262.ecma-international.org/5.1/#sec-11.4.3

// Undefined	"undefined"
/*
TYPE OF VAL -->> RESULT
Null	--->>"object"
Boolean	--->>"boolean"
Number	--->>"number"
String	--->>"string"
Object (native and does not implement [[Call]])---->	"object"
Object (native or host and does implement [[Call]])--->	"function"
Object (host and does not implement [[Call]])--->>Implementation-defined except may not be "undefined", "boolean", "number", or "string".           */
