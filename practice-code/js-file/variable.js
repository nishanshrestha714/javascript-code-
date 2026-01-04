//variable in javascript 
//so variable is a store the data 
//so variable to create to in meaningful in create the variable

//1.var // var is not used for in js is mostly
var Name ="nishan shrestha";//name is a variable 
console.log("my name is "+Name);//cancationation in used 
//or other method
console.log(`my name is ${Name}`);//template string method
//2.let //let is mostly used in js
let age=20;
console.log(age);
console.log(typeof age);//typeof is used to know the data type
console.log(`my name is ${Name} and my age is ${age} years old`  );//template string method
//3.const //const is also mostly used in js
const pi=3.14;
console.log(pi);
console.log(typeof pi);
console.log(`the value of pi is ${pi}`);//template string method

let tempurature=24;
console.log(`the tempurature is ${tempurature} deggre clesus`);//print the tempurature
let score=35.43;
console.log(tempurature.toFixed(1));//in this to fixed is used to point the decimal value //or number to control the many digites
let min=10.12;
let max=20.56;
console.log(`the min value is ${min} and the max value is ${max}`);
console.log(`the min value is ${min.toFixed(1)} and max value is ${max.toFixed(2)}`);//to control the decimal value
//to string method
let mark=23;
console.log(mark.toString());//to convert the number to string
//why used for in tostring method
//1.showing data in UI
//1. joining numbers with text
//2.sending values to HTML
//3.working with string methods

//next tolocalestring method
let salary=12345678;
console.log(salary.toLocaleString());//to convert the number to local string with comma
console.log( `my  monthly salary is ${salary.toLocaleString()}`);//to print the salary with local string
//math operations 
let x=10;
let y=3;
console.log(x);//print value of x
console.log(y);//print value of y
console.log(`the x value is ${x} and y value is ${y}.`);
console.log(`in this add for x and y to get result =${x + y}`);//add the value
console.log(`in multiply=${x*y}`);//multiply the value
console.log(`in avarage number is ${x+y/2}`);//avarage number
console.log(`the avrage value is ${Math.ceil(x+y/2)}`);//math ceil is used to round the number to upper value

//ohher math 
let avarage=32.24;
console.log(avarage);
console.log(Math.ceil(avarage));
let price =2453;
let discount=11;
console.log(`${price}`);
console.log(`${discount}`);
//let discontprice = `the discount price is ${Math.ceil(price*discount/100)}`;
//console.log(discontprice);
let disprice=price*discount/100;
console.log( "the discount price is ="+ disprice);

// store the discount amount as a NUMBER so we can do arithmetic on it
let discontAmount = (price * discount / 100);
console.log(`the discont amount is= ${discontAmount}`);
let finalPrice = "The final price is =" + Math.ceil(price - discontAmount);
console.log(finalPrice);
//math floor 
//floor is 
 finalPrice = "The final price is=" + Math.floor(price - discontAmount);
 console.log(finalPrice);
 //qn practice 
 //If price is greater than 2000, give 10% discount, else no discount.
 let AriportPrice=2500;
 let discounts=10;
 //solutations 
 let DiscountAmount=AriportPrice*discounts/100;
 console.log("this  is discount price="+DiscountAmount);
 //final price 
 let FinalPrice=(AriportPrice-DiscountAmount);
 console.log("this airport final price is ="+FinalPrice);
 console.log(typeof FinalPrice);
 // ramdom number print in this code for logics 
let FirstNumber=100;
let LastNumber=200;
let output=(FirstNumber +"\n"+ LastNumber);//line break with string change in 
console.log(output);
console.log(typeof output);//string 
//solutation
//console.log(FirstNumber);
//console.log(LastNumber);
//OR array from  
let outputNumber=[FirstNumber,LastNumber];
console.log( typeof outputNumber[0]);

let RamdomNumber= Math.floor(Math.random()*(FirstNumber-LastNumber+1)+FirstNumber);
console.log(RamdomNumber);
console.log(typeof RamdomNumber);
//qn solutation 
//Calculate finalPrice = salary - 0.1*salary and round it to the nearest integer.
 























