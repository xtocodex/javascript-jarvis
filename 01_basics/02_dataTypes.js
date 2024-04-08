"use strict"; // treat all JS Code as newer version 

// alert(2 + 2) 
// we are using nodejs not browser so we get error here but it gives popup answer in browser console
// but we will know how to use it here later.

//Let's assume u write->  console.log(3 + 3); console.log("Jarvis");
// above is very bad code practise don't write like this although it will run
// but it is not future proof readablity is poor; should be neat and high..

// ->> rewriting- console.log(3 + 3); console.log("Jarvis"); <<-

console.log(3 + 3) 
console.log("Google")
let name = "jarvis"
let age = 18
let isLoggedIn = false
let state = null

//number => 2 to power 53
// bigint (used to store veryy>>> large value/num used in trading sys,algo etc.)
// string =>""
// boolean => true/false
// *null => standalone value means doesn't has any value but not ZERO. (VERY IMPORTANT....)
// undefined => (no value has been assigned) (VERY IMPORTANT....)
// please -- understand (null vs undefined)...
// symbol => unique
// object

console.log(typeof undefined); // It's a type of - undefined
console.log(typeof null); // It's a type of - object
// But these question the fundamentals why null is recogn. as object and undefined as undefined ??
// We will find later on.
// Revise the MDN Docs for this context.