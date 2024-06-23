let score = null

console.log(typeof score);

let valueInNumber = Number(score) //score is now converted into number
console.log(typeof (valueInNumber));

console.log(valueInNumber) // NaN stated for not a number

// "33" => 33
// "33abc" =>NaN although the typ of 33abc will be shown number only
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true
// => false
// "" => false
// "daksh" => true
