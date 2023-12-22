let score = "33abc"  // also check by let undefined,null etc.

//console.log(typeof score);
//console.log(typeof(score));
//
//let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber)


// Value in valueInNumber maybe not pure no. like 33 it maybe like 33abc which is not pure number
// But sometimes it converts and gives such output which can be cross checked a
// gain by console.log(typeof valueInNumber) 
// We will learn later more on this
// See how conversion works from anything(string,no.,boolean) to Number(score)
// "33" => 33
// "33abc" => Nan (Not a Number)
// true=> 1; false =>0 
// any string= NaN

//let isLoggedIn = " " // Also "" =>false "xyz" =>true , "0" or "1"=> true 
//
//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);