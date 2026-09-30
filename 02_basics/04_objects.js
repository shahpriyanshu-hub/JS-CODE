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

