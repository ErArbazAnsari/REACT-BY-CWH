"use strict";
// mynum = 10; tamij se code likho
let mynum = 10;

console.log("JavaScript is Running...");
let a = "this is me";
let num = 4 - 5;
console.log(num);
console.log(a);

// important topics:
// datatypes
// loop
// Array
// function
// object

// let myobj = {
//   a: 1,
//   b: 2,
//   c: () => {
//     console.log("This is arbaz");
//   }
// };
// console.log(myobj[0]);

// addEventListener("click", () => {
//   alert("hi");
//   console.log("click");
// });

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(element => {
  console.log(element);
  document.body.append(element);
});

setTimeout(() => {
  document.body.append("Arbaz Ansari");
}, 3000);
console.log("main niche wala script hun");
