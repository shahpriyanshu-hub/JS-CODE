// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* 
the reason is that an eqallity checks == and comparision >, <, >=, <= work differently 
compariosions converts null to a number, treating it is 0 
that's why (3) null >= 0 is true and (1) null >0 is false
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

// === (tripel equal are use differnetly {is known as stricket check} 
// means checks data type also )

console.log("2" === 2)