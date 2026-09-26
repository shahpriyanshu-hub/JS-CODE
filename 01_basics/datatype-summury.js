// primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt 

const score = 100
const scorevalue = 10.3

const isLoggedIn = false
const outsidetemp = null 
let username;

const id = Symbol('135')
const anotherId = Symbol("12624")

console.log(id === anotherId)

// const bigNumber = 654654674n
 
// referance( non primitive )

// arrays, objects, functions 

const heros = ["shaktiman", "Itachi", "Goku"] // <=== Array 

let myObj = {
    name: "priyanshu",
    age: "22",                // <==== object 
}

const myFnction = function () {
    console.log("hello boss")
}

console.log (typeof outsidetemp)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap(non-primitive)

let myYoutubename = "dark_FF"

let anothername = myYoutubename
anothername = "velorant"

console.log (myYoutubename)
console.log(anothername)

let userone = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone
usertwo.email = "priyanshushah878@google.com"

console.log(userone.email)
console.log(usertwo.email)

