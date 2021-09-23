console.log(countries)
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