// console.log(countries)
// alert('Open the console and check if the countries has been loaded')
function fullName (){
    let firstName = "Adesanya"
    let lastName = "Adenuga"
    console.log(firstName + " " + lastName)
}
fullName()
function addNumbers(par1, par2){
    let sum = par1 + par2
    console.log(sum)
}
addNumbers(2,6)

function areaOfRectangle(length, width){
    let area = length * width
    return area
}
console.log(areaOfRectangle(2,3));

function volumeOfRectPrism(lenght, width, height){
    let rectPrism = lenght * width * height
    return rectPrism
}
console.log(volumeOfRectPrism(3,4,5));
// 12 
function convertCelciusToFahrenheit (oC){
    let oF = (oC * 9/5) + 32
    return oF
}
console.log("No 12:" + convertCelciusToFahrenheit(100));

//13 
function calcBMI (weight, height){
    let bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        return (`${bmi} indicates underweight`)
    } else if (18.5 > bmi || bmi < 24.9) {
        return (`${bmi} indicates normal weight`)
    }   else if (25 > bmi || bmi < 29.9) {
        return (`${bmi} indicates overweight`)
    } else if (bmi >= 30){
        return (`${bmi} indicates Obese`)
    }
}
console.log(calcBMI(1500,20));

//14 
const months = ["January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", 
                "October", 
                "November", 
                "December"];
/* function checkSeason (month){
    if (months[0]) {
        return "Jan"
    }
}
console.log(checkSeason(0)) */

//15
function findMax (dig1, dig2, dig3){

   return Math.max(dig1,dig2,dig3)
}
console.log(findMax(500,10000,20));

// Level 2 question 2
function solveQuadEquation (a,b,c,){
    let expo = (Math.sqrt(b**2 - (4*a*c)))/2*a
    let expoAns =  parseInt(expo)
    console.log (expoAns)
    

}
console.log(solveQuadEquation(2,3,4))



