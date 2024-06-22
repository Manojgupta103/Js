// console.log("Hi Manoj");
// name = "Tony Stark";
// console.log(name );

// function student(){
//     name : "Manoj"
//     age : 20
//     DOB : 10/3/2003
// };

// console.log(student);

// const product = {
//     name : "Parker Jotter Standard CT Ball Pen",
//     rating: 4,
//     price :270 ,
//     color : "red",
//     isAvailable : true
// };

// console.log(product);

// const profile = {
//     name : "@manoj_gupta103",
//     posts : 17,
//     followers : 162,
//     following : 97,
//     isfollowed : true,
// };
// console.log(profile);


// let a = 15;
// if(a % 2 == 0 ){
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }


// let age = prompt("Enter your age:");

// if (age <= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// if (age > 18) {
//     console.log("You are a kid");
// } else if (18 <= age && age <= 40) {
//     console.log("You are an adult");
// } else {
//     console.log("You are old");
// }

// let Number = prompt("Enter a Number:");

// if (Number % 5 == 0){
//     alert("Divisible by 5");
// }else{
//     alert("Not divisible by 5");
// }



// let Marks = prompt("Enter Marks:");

// if (Marks >= 90 && Marks <= 100) {
//     alert("A");
// } else if (Marks >= 70 && Marks <= 89) {
//     alert("B");
// } else if (Marks >= 60 && Marks <= 69) {
//     alert("C");
// } else if (Marks >= 50 && Marks <= 59) {
//     alert("D");
// } else if (Marks >= 0 && Marks <= 49) {
//     alert("F");
// }

// loops
// for loops


// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum = sum + i;
// }
// console.log("Sum = ", sum);

// let gameNumber = 25;
// let userGuess = parseInt(prompt("Guess the game number:"));

// while (userGuess != gameNumber) {
//     userGuess = parseInt(prompt("Wrong guess! Try again:"));
// }

// console.log("Congratulations! You guessed the correct game number:", gameNumber);

// var nums = [1, 11, 3, 2, 5];

// for (var i = 0; i < nums.length && nums[i] % 2 !== 0; i++) {
//    console.log(nums[i]);
// }

// for (let i = 20; i <= 25; i++){
    
//     if(i === 22) {
//         continue;
//     }
//     console.log(i);
// }

// var sum = 0;
// var input = prompt('Enter a number, -1 to exit.');

// while (input !== '-1') {
//    sum += Number(input);
//    input = prompt('Enter a number, -1 to exit.');
// }

// alert(`The sum is ${sum}.`);

// console.log("@");

// let Fullname = prompt(" Enter Full Name :", );
// let username = "@" + Fullname + Fullname.length;
// console.log(username);

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks ){
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(avg);

// let price = [250,645,300,900,50];
// let i = 0;
// for (let val of price){
//     console.log('Value at index ${i} = ${val}');
//     i++;
// }

// let prices = [250, 645, 300, 900, 50];

// for (let i = 0; i < prices.length; i++) {
//     prices[i] = prices[i] * 0.9; // Applying 10% off
// }

// 


// let Companies = ["Bloomberg", "Microsoft", "Uber", "Goggle", "IBM", "Netflix"];
// Companies.shift();

// Companies.splice(2, 1, Ola);

// Companies.push("Amazon");

// function fun(str) {
//     let count = 0;
//     for(const char of str){
//         if (
//             char === "a"|| 
//             char === "e"|| 
//             char === "i"|| 
//             char === "o"|| 
//             char === "u" )
//             {
//             count++;
//         }
//     }
//     return count; 
// }

// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
//   }
  
//   myFun("one", "two", "three", "four", "five", "six");
  
  // Console Output:
  // a, one
  // b, two
  // manyMoreArgs, ["three", "four", "five", "six"]
  
//   const makeWithdraw = (balance) =>
//   ((copyBalance) => {
//     let balance = copyBalance; // This variable is private
//     const doBadThings = () => {
//       console.log("I will do bad things with your money");
//     };
//     doBadThings();
//     return {
//       withdraw(amount) {
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         }
//         return "Insufficient money";
//       },
//     };
//   })(balance);

// const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount.balance); // undefined
// console.log(firstAccount.withdraw(20)); // 80
// console.log(firstAccount.withdraw(30)); // 50
// console.log(firstAccount.doBadThings); // undefined; this method is private
// const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
// console.log(secondAccount.withdraw(30)); // "Insufficient money"
// console.log(secondAccount.withdraw(20)); // 0


// let marks = [  90,  84, 59, 63, 96 ];

// let toppers = marks.filter((val) => {
//   return val > 90;
// });

// console.log(toppers);

// let n = prompt("enter any number:");

// let arr = [];

// for(let i=1; i<=n; i++){
//   arr[i-1] = i;
// }

// console.log(arr );

// let sum = arr.reduce((res, curr) => {
//   return res + curr;
// })

// console.log("Sum = ",sum);

// let factorial = arr.reduce((res, curr) => {
//   return res * curr;
// })

// console.log("Factorial = ",factorial);

// console.log(window);

// let newButton = document.createElement("button");
// newButton.innerHTML = "Click me";

// newButton.style.color = "White";
// newButton.style.backgroundColor = "red";

// document.querySelector("body").prepend(newButton);

let modeBtn = document.querySelector("#mode");
let currMode = "Light";

modeBtn.addEventListener("click",() => {
  if (currMode === "Light") {
    currMode = "Dark";
    document.querySelector("body").style.backgroundColor = "black";
  }
  else {
    currMode = "Light";
    document.querySelector("body").style.backgroundColor = "White";
  }
  console.log(currMode);
})

// const employee = {
//   calcTax(){
//     console.log("Tax is calculated");
//   }
// };

// function hello(){
//   console.log("Hello");
// }
// setTimeout(hello, 2000);
// console.log("One");
// console.log("Two");

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// console.log("Three");
// console.log("Four");

// let promise = new Promise((resolve, reject) => {
// console.log("Hello");
// resolve(123);
// }); 

// const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL);
// console.log(promise);

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//   console.log("Getting facts...");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   factPara.innerHTML = data[3].text;
// };


function getFacts(){
  fetch(URL).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    factPara.innerHTML = data[0].text;
  });
}
btn.addEventListener("click", getFacts);