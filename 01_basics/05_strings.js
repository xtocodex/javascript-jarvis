const name = "Jarvis"

const repoCount = 50

// console.log(name + repoCount + "Value");
// this above is outdated can be used but not recomm.

console.log(`Hello my name is ${name} and my repo count is ${repoCount} is`);
// ModernWay this syntax is the calledcakticks `` string interpolation -- ${} "in thios we will inject any variable const we have declared"

const gameName = new String('jarvisJV')

//console.log(gameName[0]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// what we out () gives the alphabet in that position...

const newStringOne = " jarvis "
console.log(newStringOne);
console.log(newStringOne.trim()); // If we do this then extra spaces get remove " jarvis    " to this "jarvis"
// go to MDN docs for this trim references and some more depth

const url = "https.//google.com/google%20homepage"
console.log(url.replace('%20', '-')) // wanto replace something with another thing 'x', 'y' (x replaced by y)

// find any keyword is present in URL name or not
console.log(url.includes('jarvis')) 
// As 'jarvis' is not there in url name output = False if matching word = True

console.log(gameName.split('-'));

// HW--Go to MDN and Google Console and do some more research on Strings, its types..
// Also always use backtrack method explained in this..