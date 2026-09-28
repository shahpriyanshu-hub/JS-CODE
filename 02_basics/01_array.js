// arrays

const myArr = [0, 1, 2, 3, 4, 5]

/*

 JS array copy operation created shallow copies. 
shallow copy:- shallow copy of an object is a copy whoes properties share the same 
referance point to the same underlying values.<---- basically what  are you change in referance point thats
change in original array 
deep copy:- proprties share do no same referance

 */

const myCharacter = ["Goku", "Luffy", "Zoro"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1])

// Arrrya matheods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(2))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)

//slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)  //<-- in the splice array are change ( portion are removed 1,2,3 )
console.log("C", myArr)
console.log(myn2)