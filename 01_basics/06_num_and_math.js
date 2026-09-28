const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(3))  // <---- to specially use in 
                                // ecommmerase application for calculation, GST calculation 

const otherNumber = 23.588866
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++  MATHS   +++++++++++++

//  console.log(Math)
//  console.log(Math.abs(-4))
//  console.log(Math.round(4.56));
//  console.log(Math.ceil(4.2));   //<---- top value
//  console.log(Math.floor(4.5))  //<----- lowest value 
//  console.log(Math.min(4, 3, 5, 7))  //<---- minimum value
//  console.log(Math.max(4, 8, 10, 78, 0)) //<----- maximum value

console.log(Math.random())  //<---  value between 0 and 1
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1) //<---- values between 1 to 9 

const min = 10
const max = 20

console.log(Math.floor(Math.random () * (max - min + 1)) + min) 