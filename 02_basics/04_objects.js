//const instaUser = new Object()  // <--- singleton object
// const instaUser = {} // <---- non singleton object

const instaUser = {}
instaUser.id = "1245pri",
instaUser.name = "Anshu"
instaUser.isLogedIn = false

// console.log(instaUser)

//++++++++++++++++++++++           object in object +++++++++++++++++++++

const regularUser = {
    email: "some@google.com",
    fullname:{
        userfullname:{
            firstname: "priyanshu",
            lastname: "shah",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

const users = [
    {
        id: 1,
        email: "priyanshu@google.com",

    },
    {
        id: 2,
        email:"anshu@gmail.cmom"
    },
    {
        id: 3,
        email: "parth@gmail.com"
    },
]

// users[1].email
// console.log(instaUser)

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

// console.log(instaUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursenmae: "cybercity",
    price: "$200",
    courseInstructor: "Priyanshu",
}

//course.courseInstructor

const {courseInstructor: Instructor} = course 

console.log(Instructor)

// {
//    " name": "Aanshu",
//     "coursename": "Automobolie and Robotics",
//     "price": "Free"
// }

[
    {},
    {},
    {}
]