//dates

let myDate = new Date()
//console.log(myDate.toString());      Wed Jun 26 2024 09:55:08 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString());    Wed Jun 26 2024

//console.log(myDate.toISOString());   2024-06-26T09:55:08.563Z

//console.log(myDate.toLocaleDateString());  6/26/2024

//console.log(myDate.toLocaleString());    6/26/2024, 9:55:47 AM


//console.log(typeof myDate);   object
//let myCreatedDate = new Date(2024, 0, 26)

//let myCreatedDate = new Date(2024, 0, 26, 5, 3) // MONTHS START WITH 0

//let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());   // 1/26/2024, 5:03:00 AM

let myTimeStamp = Date.now()
//console.log(myTimeStamp);  //1719396506304 mili seconds from start of the year
//console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
   
})
