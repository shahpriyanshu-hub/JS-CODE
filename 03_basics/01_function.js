function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")

}
/*
sayMyName <--- referance
sayMyName <--- referance with exicution
*/

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }


function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,4);

// console.log("result :", result)

function loginUserMessage(Username = "sam"){
    if (!Username){
        console.log("please enter username");
         return
    }
    return `${Username} just logged in `

}

// loginUserMessage("Priyanshu")
//console.log(loginUserMessage("priyanshu"))

// console.log(loginUserMessage("Priyanshu"))

function calculateCarPrice(num1){
    return num1
}

// console.log(calculateCarPrice(200, 400, 500))

const User = {
    Username: "Priyanshu",
    Price: 699
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.Username} and price is 
        ${anyobject.price}`) 
}

// handleObject(User)

handleObject({
    username:"sam",
    price: 599,
})

const myNewArray = [200, 400, 100, 580]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 580]))