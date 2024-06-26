// array declaration 

const myArr = [0, 1, 2, 3, 4, 5, ]
const myHeroes = ["nick", "fury"]

const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr[0]);




// Array Methods 

//myArr.push(6) // adds a value to the array
//myArr.push(7)
//myArr.pop() removes the last value in any array

//myArr.unshift(9) //adds a value in the starting of the list avoid using
//myArr.shift() // removes the first value in array

//console.log(myArr.includes(9)); gives false
//console.log(myArr.indexOf(19)); // gives -1 for any value not in arrray

// const newArr = myArr.join() //converts the type(array) into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);  string




// slice,splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) //the selected range gets removed from array
console.log("C ", myArr);
console.log(myn2);



// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]