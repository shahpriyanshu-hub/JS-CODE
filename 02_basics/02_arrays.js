const marvel_heros = ["Thor", "Iornman", "Spiderman"]
const dc_heros = ["Superman", "Batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros)

const another_arry = [1, 2, 3, [4, 5, 6], 7, [6,7,8 [4, 5, 6]]];

const rael_another_array = another_arry.flat(Infinity)
console.log(rael_another_array)


console.log(Array.isArray('priyanshu'))
console.log(Array.from('priyanshu'))
console.log(Array.from({name: "priyanshu"}))   //<-- mety array (interesting case)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))