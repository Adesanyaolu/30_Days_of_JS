// this is your main.js script
let surName = "Adenuga";
let nAge = 27;
let ssingle = false;
let mmode 
let nnow = "";
console.log (typeof surName, nAge, ssingle, mmode, nnow);

let money;
let time;
let road;
let grade;

// Day 2
const PI = Math.PI
console.log(PI);

// Creating a random number, .floor rouund up to the nearest whole number
const randomNum = (Math.random());
let randomEvenNum = Math.floor(Math.random () * 11);
console.log(randomEvenNum);

// Chapter 2 Exercise level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.'by John Holmes teaches us to help one another."
)
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
)
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = '10';
let tenInt = parseInt(ten);
console.log(tenInt);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let floatTen = "9.8";
let roundFloatTen = Math.round(floatTen);
console.log (roundFloatTen);

// Check if 'on' is found in both python and jargon
let checkWord = "python";
let checkWordB = "jargon";
console.log(checkWord.includes("on"));
console.log(checkWordB.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let course = "I hope this course is not full of jargon.";
console.log(course.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.

let newRandom = Math.random() * 101;
console.log(Math.floor(newRandom));

// Generate a random number between 50 and 100 inclusively.
let randomNumber = Math.random( );
let rangeRandomNumber = Math.floor(randomNumber*51) + 50;
console.log(rangeRandomNumber);

// Generate a random number between 0 and 255 inclusively.
let newNRandom = Math.random() * 256;
console.log(Math.floor(newNRandom));

// Access the 'JavaScript' string characters using a random number.
let character = "JavaScript";
let charNum = Math.floor(Math.random() * 10);
console.log (charNum);
console.log(character[charNum]);

// Use console.log() and escape characters to print the following pattern.
console.log ("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

//Use substr to slice out the phrase because because because from the following sentence:
let because = "You cannot end a sentence with because because because is a conjunction";
let pattern = /because/gi
console.log(because.match(pattern))  

// Exercise 3
// Count the number of word love in this sentence.
let countNum = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let numLove = /love/gi;
console.log (countNum.match(numLove));

// Use match() to count the number of all because in the following sentence:
let mcount = 'You cannot end a sentence with because because because is a conjunction'
