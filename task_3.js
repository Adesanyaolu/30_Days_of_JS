// Declare firstName, lastName, country, city, age, isMarried, year variable 
// and assign value to it and use the typeof operator to check different data types.
let first_Name = "Adesanya",
    last_Name = "Adenuga",
    coun_try = "Nigeria",
    city = "Abeokuta",
    dAge = 26,
    isMarried = false,
    year = 2021;

console.log (firstName);
// Check if type of '10' is equal to 10
let ten_three = '10';
let tenInt_three = parseInt(ten);
console.log(tenInt_three);

//Check if parseInt('9.8') is equal to 10
let floatTenThree = "9.8";
let roundFloatTenThree = Math.round(floatTenThree);
console.log (roundFloatTenThree);

//Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value. 
let truValue = 4 > 3    
console.log (truValue);
let newTrueValue = 4 < 8  
console.log (newTrueValue);
let broke = false;
console.log(broke);

/* Figure out the result of the following comparison expression first without using console.log(). 
After you decide the result confirm it using console.log() */
let first = 4 > 3, //true
    second = 4 >= 3, //true
    third = 4 < 3, //F
    fourth = 4 <= 3, //F
    fifth = 4 == 4, // T
    sixth = 4 === 4, // T
    seventh = 4 != 4, // F
    eight = 4 !== 4, // F
    nine = 4 != '4', // F
    tenth = 4 == '4', // T
    eleven = 4 === '4'; // F
console.log(first, second, third, fourth, fifth,sixth, seventh, eight,nine, tenth, eleven);
// Find the length of python and jargon and make a falsy comparison statement.
let py = "python",
    ja = "jargon";
console.log (py.length > ja.length); 

/* Figure out the result of the following expressions first without using console.log(). 
After you decide the result confirm it by using console.log() */

let firstt = 4 > 3 && 10 < 12, // T
    secondd = 4 > 3 && 10 > 12, // F
    thirdd = 4 > 3 || 10 < 12, //T
    fourthh = 4 > 3 || 10 > 12, // T
    fifthh = !(4 > 3), // F
    sixthh = !(4 < 3), // T
    seventhh = !(false), //T
    eightt = !(4 > 3 && 10 < 12), // F
    ninet = !(4 > 3 && 10 > 12), // T
    tenthh = !(4 === '4'); // T
    console.log (firstt, secondd, thirdd, fourthh, fifthh, sixthh, seventhh, eightt, ninet, tenthh);
// There is no 'on' in both dragon and python
console.log (py.includes("on"));
console.log (ja.includes("on"));

/* Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now? */
const nyear = new Date;
console.log (nyear.getFullYear());
console.log (nyear.getMonth());
console.log (nyear.getDate());
console.log (nyear.getDay());
console.log (nyear.getHours());
console.log (nyear.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log (nyear.getTime());
const allSeconds = Date.now() //
console.log(allSeconds) //

/* Exercises: Level 2
Write a script that prompt the user to enter base and height of 
the triangle and calculate an area of a triangle (area = 0.5 x b x h). 

let base = prompt('Enter base');
let height = prompt('Enter height');
let area = parseInt (0.5* base * height);
console.log(`The base is ${base} and height is ${height}, therefore area is ${area}`); */

/* Write a script that prompt the user to enter side a, side b, and side c of the 
triangle and and calculate the perimeter of triangle (perimeter = a + b + c) 

let sideA = +prompt('Enter side a'),
    sideB = +prompt('Enter side b'),
    sideC = +prompt('Enter side c');
let perimeter = parseInt(sideA + sideB + sideC);
console.log(`The side A is ${sideA}, sideB is ${sideB} and sideC is ${sideC} therefore perimeter is ${perimeter}`); */

/* Get length and width using prompt and calculate an area of rectangle 
(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) 
let length = +prompt('Enter length'),
    width = +prompt('Enter width'),
    area = length * width,
    perimeter = 2 * (length + width);
    console.log(`The length is ${length}, width is ${width} and area is ${area} therefore perimeter is ${perimeter}`) */

/* Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
    and circumference of a circle(c = 2 x pi x r) where pi = 3.14 
    let radius = +prompt('Enter radius');
    const pi = 3.14;
    let area = (radius * radius) * pi;
    let circumference = 2 * pi * radius;
    console.log(`The radius is ${radius}, area is ${area} and circumference is ${circumference}`) */

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
/* let x1 = +prompt('Enter x1'),
    x2 = +prompt('Enter x2'),
    y1 = +prompt('Enter y1'),
    y2 = +prompt('Enter y2'),
    m = y2-y1/x2-x1;
console.log (m); */

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/* let hours = +prompt('Enter hours of work'),
    rate = +prompt('Enter rate/hour');
const pay = hours * rate;
console.log (`Your pay is $${pay}`); */

//If the length of your name is greater than 7 say, your name is long else say your name is short.
/* let mname = prompt('Enter your name');
let nameLength = mname.length;
console.log (nameLength);
nameLength > 7
    ? console.log(`${mname} your name is long`)
    : console.log(`${mname} your name is short`)
nameLength = mname.length; */

// Compare your first name length and your family name length and you should get this output.
let fName = "Adesanyaolu",
    famName = "Adenuga";
fName.length > famName.length
    ? console.log(`Your first name ${fName} is longer than your family name ${famName}`)
    : console.log(`Your family name ${famName} is longer than your firt name ${fName}`)
// Your first name, Asabeneh is longer than your family name, Yetayeh

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myNewAge = 45,
    yourAge = 25;
const ageDiff = myNewAge - yourAge;
console.log(`I am ${ageDiff} years older than you.`)

/* Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. 
let birthYear = +prompt('Enter birth year');
const driveAge = 2021 - birthYear;
let noDriveAge = 18 - driveAge;
console.log (driveAge);
driveAge > 18 
    ?  console.log(`You are ${driveAge}. You are old enough to drive`)
    :  console.log(`You are ${driveAge}. You will be allowed to drive after ${noDriveAge} years`) */

/* Write a script that prompt the user to enter number of years.
 Calculate the number of seconds a person can live. Assume some one lives just hundred years 
 let noOfYears = +prompt('Enter number of years you live');
 const n = new Date(noOfYears);
 console.log(n.getSeconds())

 const date = new Date();
 const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
 const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()]; */

/* Create a human readable time format using the Date time object. 
The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */
const thirdnow = new Date ();
console.log (thirdnow);
const thirdyear = thirdnow.getFullYear ();
const thirdmonth = ("0" + thirdnow.getMonth()).slice(-2);
const thirddate = ("0" + thirdnow.getDate()).slice(-2);
const thirdhours = ("0" + thirdnow.getHours()).slice(-2);
const thirdmins = ("0" + thirdnow.getMinutes ()).slice(-2);
console.log(`${thirdyear} / ${thirdmonth} / ${thirddate} ${thirdhours}:${thirdmins}`) 


