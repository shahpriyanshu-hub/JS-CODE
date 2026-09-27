const name = "PRIYANSHU"
const repocount = 7

// console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('priyanshu shah')

console.log(gameName [0])


// console.log(gameName.length)
// console.log(gameName.toUpperCase)
console.log(gameName.charAt('7'))
console.log(gameName.indexOf('u'));

const newStirng = gameName.substring(0, 8)
console.log(newStirng)

const anotherString = gameName.slice(-6, 4)
console.log(anotherString)

const newStirngOne = "   priyan shu.   "
console.log(newStirngOne)
console.log(newStirngOne.trim()) //removing satring and ending space

const url = "https://hitesh.com/hitesh%20Chodhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))