// loop definations  is Loop means repeating the same task again and again until a condition becomes false.
// or short from 
// types of loop 
//for loop is define is A for loop runs code again and again until a condition becomes false.
//  while loop in definations 
// Condition is checked before running the code

//for (initialization; condition; increment/decrement) {
    // code to run
//}

// write in example 

let name1 = "nishan shrestha";
for (let i=1; i<=5; i++ ){
    console.log(name1);
}

//qn 
// even number ]
//Even → number % 2 === 0
//Odd → number % 2 !== 0

let number =1;
for (let i=1; i<=20; i++){
    if(i%2==0){
console.log(i+"is even");
    }
    else{
        console.log(i+"is odd ")
    }
    
}

 // sum of number in 1 to 10 
 let number1=1;
 let number2=10;
 sum=0;
 // write the conditional in 
 for (i=number1;i<=number2;i++){
    console.log(" ");
    for(j=number1;j<=number2; j++){
        console.log(`${i}+${j}=${i+j}`);
    }
 }

 // write the multiply table in the 1 to 5 or  different number is same conditional in used 
 
 let FirstNumber=1;
 let LastNumber=5;
 console.log(FirstNumber);
 console.log(LastNumber);
 console.log("the multiply the nunmber   in 1 to 5 ");
 for(n=FirstNumber;n<=LastNumber;n++){
    console.log(" ");
     for(n1=1;n1<=10;n1++){
       console.log(`${n}*${n1}=${n*n1}`);
        }
   }

    // for loop defiantion 
    //--Used when you know exactly how many times you want to repeat a block of code.
 // count in the number in countdown 
 //exapmle 
 console.log("count the number in countdown");
    let min=1;
    let max=6;
    for (i=max;i>=1;i--){
        console.log(i);
    }

    //Calculate the sum of all numbers in an array.
    let array=[12,23,34,34,4,5,6,7];
    let sum1=0;
    for( let i=0; i<array.length;i++){
        // sum1=sum1+array[i];
        sum1+=array[i];
       
//  console.log(sum1); //step by step add in the number is print 
    }
     console.log(sum1);


/// code copy in this 

    const text = "Hello World Programming";

// Using for loop
let vowelCountFor = 0;
const vowels = "aeiouAEIOU";

for (let i = 0; i < text.length; i++) {
  if (vowels.includes(text[i])) {
    vowelCountFor++;
  }
}
console.log(`Vowel count (for loop): ${vowelCountFor}`);
// practice in the same condation 
console.log("practice in the same condation ")
let texts ="my name is nishan shrestha. and i live in chautara sindhupalchok.";
let vowel="aeiouAEIOU";
let vowelCount=0;

for (let j=0;j<texts.length;j++){
    // write  the code in check for vowels sound in texts to index in find the aeiou or AEIOU  
    // impletation in the code 
    if (vowel.includes(texts[i])){
         vowelCount++;
    }
}
console.log(` vowels is :${vowelCount}`);


    //while loop defination 
    // 1. Used when you want to repeat while a condition is true, and you don't know exactly how many iterations are needed.
    //syntax 
   // while (condition) {
  // code to execute
///}
// Using while loop


// let vowelCountWhile = 0;
// let k = 0;
// while (k < text.length) {
//   if (vowels.includes(text[k])) {
//     vowelCountWhile++;
//   }
//   k++;
// }
// console.log(`Vowel count (while loop): ${vowelCountWhile}`);

console.log("sir le diyeko qn")
let num=555;
let sum2=0;
while (num>0){
    rem=num%10;
    sum2+=rem;
    num=Math.floor(num/10);
    console.log(sum2);
}


//Write a while loop to print numbers from 5 to 1
// to number is count for 5 to 1
 let number4=5;
 while (number4>=1){//in used for while loop 
    console.log(number4);
    number4--;
 }

 //to number count for 1 to 5
 let number3=1;
 while (number3<=5){//ise for in while loop in write in condition 
    console.log(number3);
    number3++;
 }

 //Write a loop to print even numbers from 1 to 20.
 // in used for if else condition
 let n = 7;//is check the number 

if (n % 2 === 0) {// in condition 
  console.log("Even number");
} else {
  console.log("Odd number");
}
//use for in loop and if else condition 
 let num1=1;
 let num2=20;
 for(i=num1;i<=num2;i++){
 if (i %2===0){
console.log(`it is number odd =${i}`);// i is count in step in step number 
 }
 // or even number 
 else {
    console.log(`it is number even ${i}`)
 }
}

//Write a loop to print even numbers from 1 to 20.
// in for while loop used for  in code 
let suru=1;
let last=20;
while(suru<=last){
    if(suru % 2 === 0){
 console.log(`${suru} even number`);
    }
    else{
        console.log(suru +""+"odd number ")
    }
   suru++;
}

//Write a loop to calculate the sum of numbers from 1 to 100.

let numbers=1;
let lastnumber=100;
let totalsum=0;
for(i=numbers;i<=lastnumber;i++){
    totalsum =totalsum+ i;
    console.log(`this 1 to 100 sum is ${totalsum}`);

}

//Write a program to count digits of a number using a loop.

//Write a loop to reverse a number (e.g., 123 → 321).

//Write a loop to find the factorial of a number.
let num0=7;
let factorial=1;
for(j=1;j<=num0;j++){
    factorial=factorial*j;
    console.log(`the factorial number is ${factorial}`);
}

// Declare the variable 'num0' which holds the number we want to find the factorial of
//let num0 = 7; 

// Declare a variable 'factorial' to store the result. Start with 1 since factorial is a product, and multiplying by 1 doesn't change the value.
//let factorial = 1;

// Create a for loop that will run from 1 to 'num0' (inclusive). The loop will multiply each number from 1 to num0 and store the result in 'factorial'.
//for (let j = 1; j <= num0; j++) {

    // Inside the loop, we multiply the current value of 'factorial' by 'j' and store it back in 'factorial'
    //factorial = factorial * j;
    
    // Log the current factorial value at each step to show the calculation in progress
  //  console.log(`The factorial of ${j} is ${factorial}`);
//}



 
 















