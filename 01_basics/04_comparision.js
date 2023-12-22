//console.log(2 <= 1);
//console.log(2 => 1);
//console.log(2 > 1);
//console.log(2 != 1);

// These above have either True or False as they are all samedatatypes. (BASIC CONVERSIONS have NO Problem)

console.log("2" > 1);
console.log("02" > 1);
// These above don't have same dataTypes. string boolean no. etc 
console.log(null > 0);
console.log(null == 0);
console.log(null >=0 );
// how operation is happening see:-
// The reason is that an equality check == and comparisons > < >= <= work differently
// Comparisions convert null to a number, treating it as 0.
// thats why (3) null >=0 is True and (1) null > 0 is False..

console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined >= 0);
// undefined always gives false independent of operations.

// === (Checks strictly snd doesn't auto convert by js)

console.log("2"=== 2);