function sayMyName(){
    console.log("D");
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");

}

//sayMyName() // sayMyName => refrence   sayMyName() => execution

// function addTwoNumbers(number1,number2){ //parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){ //parameters
//    let result = number1 + number2
//    return result
   // once we use return in function no code below will be executed
   return number1 + number2
}
 const result = addTwoNumbers(3, 4) //arguments

//  console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
loginUserMessage("daksh")
// console.log(loginUserMessage("daksh"));


function calculateCartPrice(val1, val2, ...num1){ // ... represents both rest and spread operaotr depending upon the usecase 
    return num1

}

//console.log(calculateCartPrice(200, 400, 500)) // using rest operator gives array [ 200, 400, 500 ]

const user = {
    username: "daksh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);

}
// handleObject(user)

handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200, 400 ,100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}
//console.log(returnSecondvalue(myNewArray))

console.log(returnSecondvalue([200, 400 ,500, 1000]))