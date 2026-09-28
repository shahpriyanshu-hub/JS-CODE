// Dates

let myDate = new Date ()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

console.log(typeof myDate)

// let myCreatedDate = new Date(2004, 9, 13)
// let myCreatedDate = new Date(2004, 9, 13, 12, 5)
// let myCreatedDate = new Date("2004-10-13")
let myCreatedDate = new Date("10-13-2004")
// console.log(myCreatedDate.toLocaleString())

let myTimeStemp = Date.now()

// console.log(myTimeStemp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()))

let newDate = new Date()
// console.log(newDate.getMinutes() + 1)
// console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "narrow"
    
})