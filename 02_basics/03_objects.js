// singleton

// object literals in this method singleton is not made
//Object.create in this singleton is made

//object.literals
 const  mySym = Symbol("key1")

//take a symbol define it act it as a key and print it using object


const JsUser = {
    name: "Daksh",
    "full name": "daksh singhal", 
    // now we can't access full name using . method not possible
    [mySym] : "mykey1",
    age: 18,
    location: "haryana",
    email: "daksh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satursay"]
}

// console.log(JsUser.email) this is not the right approch to access the array
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "daksh@chatgpt.com" // to change any value inside the object

//to make sure that no one changes the value
// Object.freeze(JsUser)

JsUser.email = "daksh@microsoft.com"

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); // whenever we want to access the same onject we use this.
}

//console.log(JsUser.greeting); gives [Function(anonymous)]
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


