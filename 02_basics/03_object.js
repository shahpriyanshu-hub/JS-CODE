// singleton

// Object literals 
const mySym = Symbol("key1")

const JsUser = {
    name: "priyanshu",
    "Full name": "Priyanshu shah",
    [mySym]: "mykey1",
    age: 22,
    location: "Gujarat",
    email: "priyanshu@gmail.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Wenesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);

JsUser.email =" priyanshu878shah.com"
// Object.freeze(JsUser)
JsUser.email = "priyanshu878shah.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");

}
console.log(JsUser.greeting)

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this["Full name"]}`)

}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())