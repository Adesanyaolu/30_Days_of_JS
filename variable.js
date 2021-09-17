let firstame = "Adesanya";
let age = "27";
let single = false;
let mode 
let now = "";

console.log(firstame, age, single, mode, now);

let firstName = "Adesanya";
let lastName = "Adenuga";
let maritalStatus = "Single";
let country = "Nigeria";
let myAge = 26; 

let car = "benz", model = "2021", color = "red";
console.log(model);

let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log (challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substr(0,2));
console.log(challenge.substring(0,2));
console.log(challenge.slice(3));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(challenge.split());

let internet = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(internet.split( "," ));

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence
let sent = "You cannot end a sentence with because because because is a conjunction";
console.log(sent.indexOf("because"));
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
console.log(sent.lastIndexOf("because"));

console.log(sent.search("because"));
let toTrim = "  30 Days Of JavaScript ";
console.log (toTrim.trim());

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));


// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));






