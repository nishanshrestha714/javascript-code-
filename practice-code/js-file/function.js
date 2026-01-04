


// to function is create in 
function Name(){
     console.log("hello nishan ")
}
Name();

function fullname(Name){
    console.log(`hello ${Name}`)
}
fullname("nishan shrestha");

//1. add number in  function method 
function add(n1,n2){
   return n1+n2;
}
console.log( `this is total sum in number ${add (1,3)}`);

// . Write a function to check even or odd
function check(n3){
    
 if (n3 % 2 ===0){
//  console.log(`${n3} is even `);
return (`${n3} is even`)
  }
 else{
    // console.log(`${n3} is odd`);
    return(`${n3} is odd`)
 }

}
console.log(`this number ${check(23)}`);

//Write a function to find largest of two numbers 
function find(a,b){
    if  (a>b){
         return (`${a}`);
    }
    else{
        return (`${b}`);
    }

}
console.log(  "this in larger number " + "" +find (1,2));


//Write a function to calculate factorial
// Function to calculate factorial of a number
function fact(num){
    // Initialize factorial with 1
    // (factorial of 0 or 1 is 1)
    let factorial = 1;
    // Loop from 1 up to num
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i; // Multiply factorial by i in each iteration
    }
    return factorial;// Return the final factorial value
}

console.log(fact(3));//// Call the function and print the result

//Write a function to find the square of a number.
console.log("function to find the square of a number.")
function square(x){
    return x*=x;
}
console.log(` the square number is ${square(3)}`);

//Write a function that takes a name and prints a greeting message.
function prints(message){
    console.log(`hi ${message} hello!`)//ternory operator in used 
}
console.log(prints("nishan ji"));


//converts Celsius to Fahrenheit.
//F = (C × 9/5) + 32 imp in this formula converts Celsius to Fahrenheit.
console.log("converts Celsius to Fahrenheit.");
function converts(tempurature){
    return (Fahrenheit =(tempurature * 9/5) +32);

}
console.log(`to convert into Celsius to Fahrenheit ${converts(100)} `);

//Write a function that finds the largest of two numbers. 
console.log("Write a function that finds the largest of two numbers.")
function find(x, y) {
    if (x > y) {
        return (`it is ${x}`);
    } else {
        return (` it is ${y}`);
    }
}

console.log(`the largest number ${find(232,3333)}`);

//Write a function that prints the multiplication table of a number.
console.log("function that prints the multiplication table of a number.");

function multiplication(numberby){
    for ( let i=1; i<=10; i++){
         console.log(`${numberby} *${i} = ${numberby *i}`);
            }
            // console.log(`this number multiply is ${multiplication(12)}`);
}

console.log(multiplication(12));

// next option 
function multiply(multiplicationNumber){
     let result=0;
     for (let i=1; i<=10; i++){
        result += (`${multiplicationNumber} * ${i} = ${multiplicationNumber *i} \n`);
        
     }
      return result;
}
console.log(multiply(2));

// and if else conditon in  function 
function conditon(multiplyByNumber){
    if (multiplyByNumber <=0){
        return "this is number is not match ";
    }
    else {
        let lastResult=0; // inner loop is not declare in value in  
        for (i=1; i<=10; i++){
             //let lastResult=0;  is error in code for inner loop declare 

            lastResult+= (`${multiplyByNumber} * ${i} = ${multiplyByNumber * i}\n`);

        }
        return lastResult;

    }
}
console.log(` ${conditon(9)} `);

//Write a function that prints multiplication tables from 1 to n. 
console.log("function that prints multiplication tables from 1 to n")
function multiplicationTable (n){
let multiplicationResult;
    for (let i=1; i<=n; i++){// outer loop 
        //console.log(`table 0f header ${i}`); is run but one times run in this cde 
        multiplicationResult+= (`table 0f header ${i}\n`) ; //${i} it mean current table number
        //and \n new line in jump // or      

        for (let j=1; j<=10; j++){
            //inner loop 
             multiplicationResult+=( `${i}*${j} =${i*j}\n`);// write in the conditional 
        }
        
    }
    return multiplicationResult;
}
console.log(`${multiplicationTable(3)}`);






const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// to password is check code 

// // Correct password
// let correctPassword = "admin123";

// // Maximum attempts
// let attemptsLeft = 5;

// // Function to ask password
// function checkPassword() {
//     rl.question("Enter your password: ", (userPassword) => {

//         if (userPassword === correctPassword) {
//             console.log("Password correct! Access granted.");
//             rl.close();
//         } else {
//             attemptsLeft--;

//             if (attemptsLeft > 0) {
//                 console.log("Wrong password! Attempts left:", attemptsLeft);
//                 checkPassword();
//             } else {
//                 console.log("Account blocked! Too many wrong attempts.");
//                 rl.close();
//             }
//         }
//     });
// }

// // Start program
// checkPassword( "nishan" );







//Function Rest Parameter in 
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
//1. multiple value in add in parameter

// function MultipleValueAdd(...numbers) {
//     let MultipleValueAddInSum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         MultipleValueAddInSum += numbers[i];
//     }

//     return MultipleValueAddInSum;
// }

// console.log(MultipleValueAdd(1, 3, 3, 4, 4, 5, 4, 3, 4)); // Output: 31







//. Write a function to check prime number
























//arrow  function (short form)

const fullname1=(name)=>name;
console.log(fullname1("nishan"));


// check in the conition on even or odd 
//  parameter % 2 === 0 → even
// parameter % 2 !== 0 → odd
// && → both conditions must be true


// . Write a function to check even or odd 
function check1(even){
    return (even % 2 ===0 && even >= 0)?`this number is even ${even}`:`this number is odd ${even}`;
}
console.log(`${check1(4547)}`);
// next method 
function check2(even){
    return (even % 2 !==0)?`this number is odd ${even}`:` number is even ${even}`;
}
console.log(`${check2(4546)}`);


//Write a function to find largest of two numbers 
function larger(x,y){
    return x>y ?` ${x} is large `:`${y} is large`
}
console.log(`this number ${larger(32,243)}`);


// call back function 

function areaCalcule(l ,b ,callback){
   let results=l*b;
   callback(results);
}

areaCalcule (2,4,(results) => {
    console.log(` the area of ${results}`);
});
 






