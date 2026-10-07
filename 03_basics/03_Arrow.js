const user = {
    username : "anshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)// this<--- current context 
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// function coffee(){
//     let username = "priyanshu"
//     console.log(this)
// }

// coffee()


// const chai = function(){
//     let username = "anshu"
//     console.log(this.username)
// }


// const chai = () =>{
//     let username = "anshu"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => (num1 + num2)
/*<-- implesint from and no need to write return
key word*/


const addTwo = (num1,num2) => ({username: "anshu"})
console.log(addTwo(3,4))

// constmyArray = [2,4,5,6,8,9]

// myArray.array.forEach(element => {
    
// });

