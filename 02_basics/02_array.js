const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) here it adds array into an array(like a array in terms of ana value inside an array)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concat combines 2 or more arrays without modifying an array
// console.log(allHeros);

// spread operator(spreds the array into individuaql values)
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // in place of infinity we can also use numbers to till which depth we want to create a single array
console.log(real_another_array);
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/


console.log(Array.isArray("Hitesh")) //we are asking whether it is an array or not => false

console.log(Array.from("Hitesh"))
// [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})) // interesting asking whether mai keys ka array banaun ya  iske values ka toh khali array dega
// []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creates an arrary of various variables
// [ 100, 200, 300 ]