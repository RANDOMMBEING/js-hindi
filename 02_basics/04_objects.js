// const tinderUser = new Object() //singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "daksh",
            lastname: "singhal"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2} // same type of array into array problem we will face

//const obj3 = Object.assign({}, obj1, obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// here {} is the target and onj1 anf obj2 are the source that are going into the target

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  //  [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));  //  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// object de=structure


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor} = course // if you think course intructor is too long use courseInstructor: instructor(give any name you want)
// console.log(instructor)
console.log(courseInstructor)

// {
//     name: "daksh",
//     coursename: "js in hindi",
//     price: "free"
// }

[
  {},
  {},
  {}
]