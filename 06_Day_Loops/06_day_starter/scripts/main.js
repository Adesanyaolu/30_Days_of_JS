/**  console.log(countries)
// alert('Open the console and check if the countries has been loaded')
for(let i = 10; i >= 0; i--){
    console.log(i)
  }
let f = 10
while (f >= 0){
    console.log (f)
    f--
}
 let g = 10
 do {
     console.log (g)
     g--
 } while (g >= 0)
 console.table(2)

const t = ["#", "##", "###", "####", "#####", "######", "#######"];
let tLength = t.length;
for (let i = 0; i < t.length; i++){
    console.log(t[i])
}

const dig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < dig.length; i++){
    console.log(`${dig[i]} x ${dig[i]} = ${dig[i] * dig[i]} `)
}

const nDig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < nDig.length; i++){
    console.log(`${nDig[i]} ${(nDig[i])**2} ${(nDig[i])**3}`)
}

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

for (let i = 0; i <= 100; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

var newArr = []
for (let i = 0; i <= 100; i++){ 
    let newArr = []
    newArr.push(i) 
    console.log (newArr)
    let sum = 0
    for (const num of newArr) {
    sum += sum + num 
    console.log(sum)
}
}

var arr = []
while(arr.length < 5){
    var r = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr)




**/
// const numbers = 100;
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//   sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

// }

// console.log(sum)  // 15

// const newArr = []
// let sum = 0
// for (let i = 0; i <= 100; i++){
//    newArr.push(i)
//    sum  += newArr[i]
// }
// console.log(newArr)
// console.log(sum);

const evenOddSum = []
let sum  = 0
for (let i = 0; i <= 100; i++){
    if (i % 2 == 0){
       evenOddSum.push(sum = sum + i)
    }
}
console.log(sum)
console.log(evenOddSum[50])

for (let i = 0; i <= 100; i++){
    if (i % 2 !== 0){
        evenOddSum.push(sum = sum + i)
    }
}
console.log(sum)
console.log(evenOddSum[50]);


let testArray = []
for (i = 1; i <= 5; i++ ){
    let test = (Math.floor(Math.random() * 5))
    testArray.push(test)
    console.log(testArray)
}

