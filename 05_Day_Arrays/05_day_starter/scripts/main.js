console.log(countries)
console.log(country);
console.log(webTechs);
//alert('Open the browser console whenever you work on JavaScript')
//alert('Open the console and check if the countries has been loaded')
const arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x*/

const elements = [1, 3, 4, "Forward", "Here"];
let lastIndex = elements.length-1
console.log (elements[lastIndex]);
/*
Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company */
const mixedDataTypes = ["string", NaN, 40, 40.5, "dear"];
console.log(mixedDataTypes.length)

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM","Oracle", "Amazon" ]
let lastItCompany = itCompanies.length-1;
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[lastItCompany]);
console.log(itCompanies[0].toUpperCase)
// let uppercase = itCompanies.toUpperCase[];
//console.log (uppercase)
// new line
console.log(itCompanies.toString(',') + " are big IT companies");
console.log(itCompanies.join(','))
let companyExist =  itCompanies.includes("Google");
console.log(companyExist)

a = "Java"
console.log(a)
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
let minAge = ages[0]
console.log("Min age: " + minAge)

//last age
let lastAge = ages.length - 1;
console.log("last age: " + ages[lastAge])
// lenght of ages
let lengthOfAges = ages.length
console.log("lenght of ages:" + lengthOfAges)
// Get the median age
let middleAge = ages.slice(4,6);
console.log("The median age are:" + middleAge)
let medianAge = (ages[4] + ages [5]) / 2
console.log(medianAge)
//Range
let range = lastAge - minAge
console.log(range)

let score = prompt ("Input score");
switch (true){
    case score > 100:
        console.log ("You can't score more than 100");
        break;
    case score < 0:
        console.log("You did terribly bad")
        break;
    case score >= 80:
        console.log("Your grade is an A")
        break;
    case score >= 70:
        console.log("Your grade is B")
        break;
    case score >= 60:
        console.log("Your grade is C")
        break;
    case score >= 50:
        console.log("Your grade is D")
        break;
    case score >= 0:
        console.log("Your grade is F")
        break;
    default:
        console.log("Enter a valid score")
}