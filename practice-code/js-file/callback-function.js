// callback function in explain [
//A callback function in JavaScript is a function passed as an argument to another function and executed later.
// ]
// so simple example in callback function in js 
// simple code for function 

function  sumForNumber(a,b) {// so pass in argurment 
   return (a+b); // value retrun in a+b 
}
 console.log ( `this tatal number is = ${sumForNumber(2,5)}`);//)   so function call in add number
  
 // so lets go in callback function
// function call in function vitra parameter ko rup ma pass garne in function name callback
 function sum (x,y,callback){
   if (x<0 || y<0){
    callback (`this is negative number ${(x+y)}`);
   }
   else {
    callback (`this total sum ${(x+y)}`);
   }
 }
 // this function call in arrow function used for in mustly  used 
 // so function result is parameter to recives  the value in  to  callback function
 sum (2,4 , (result)=> {
console.log(result);
 });

 // next qn with slove in simple 

 function Callback(a,b,callback){
    let result;
    setTimeout(() => {
        result=a*b;
         callback (result);
    }, 3000);
   

 }
 Callback( 12,34 ,(result) =>{
 console.log(`this number multiply is  ${result}`)
 });
















 
// so callback function in object used in js to explain
function userinformation( name, age, address,  callback){
    let userdetails={
       fullname:name,
         age:age,
            address:address,
    };
    callback(userdetails);
}
userinformation("nishan shrestha", 24, "ktm nepal", (userdetails)=>{
// console.log(`my name is ${userdetails.fullname}`);
// console.log(`i'am ${userdetails.age}`);
// console.log(`i live in ${userdetails.address}`);
console.log(`my name is ${userdetails.fullname}. i'am ${userdetails.age} years old. and i live in ${userdetails.address}`);
});




// callback function in multiple value return in object from 
function userinfo (a,b, callback){
   callback({
    sum : a+b,
    multiple : a*b,
    sub : a-b,
   });
}
userinfo (12,4, (result) =>{
    console.log(` this is total sum ${result.sum}`);
    console.log(` this is multiple number ${result.multiple}`);
    console.log(` this is sub number ${result.sub}`);
});




    


// so simple callback function in used to sum in 2 number

console.log('the if else condition in callback functon ');
function sum (a ,b, callback){
     if (a>b){
        console.log(`${a} is large number`);
    }
    else {
        console.log ( `${b} is large number`);
    }

      if (a<=0 || b<=0) {
        console.log(" this number is not match");
    }
 
    else{
        console.log(" both number is positive");
    }
    

    let result=a+b;
    let multiple= a*b;
    let sub= a-b;
    // so multiple value return in  callback function used in js to syntax 
    // callback(result);
    // callback(multiple);
    // callback(sub);
    // this is error in the callback function only one value return
    callback (result, multiple, sub);

}


// so function call in callback function 
// in use arrow function
sum (9,4,(result, multiple, sub)=>{
    console.log(` this is total sum = ${result}`);
    console.log(`this is multiple number = ${multiple}`);
    console.log(`this is sub number = ${sub}`);
});



// logical error in the callback function only one value return
//task
function calculate(a,b,callback){
    let result=0;
    result=a+b;
    callback(result);
}

calculate(5, 3, result => {
    console.log("Result is: " + result);
});
// expected output: Result is: 8

// tsk
function greetUser(name, callback) {
    let greeting = `Hello, ${name}!`;
    callback(greeting);
}
greetUser("Nishan", message => {
    console.log(message);
});

// task  to delay message in callback function 
function delaymessage (message , time ,callback){
    // console.log("to wait for 5 second....")
    setTimeout(()=>{
        callback(message);
    } ,time);
}
delaymessage(`this is delay messsage in callback function`,5000,(data)=>{
    console.log(data);
});
// expected output after 5 seconds: this is delay messsage in callback function




/// simple qn for callbaack 
 function multiply (a,b, callback){
    // if (a==0 || b==0) yo condition le 0 multiply garna milena vanera check garxa
if (a<=0 || b<=0){
   callback("can't  multiply by zero")
}
// yadi 0 multiply garna milxa vanera check garna cha vani tala ko condition use garne
else {
   callback (a*b);
}

 };
 multiply(4, 5, result => {
    console.log(`this multiply number is ${result}`);
});

multiply(0, 3, result => {
    console.log(result);
});
// expected output: can't multiply by zero



//Callback with Error & Success (Real-World Style) 
function voter(age,callback){
    if (age >=18){
        callback(`you can vote and your age is ${age}`);
    }
    else{
        callback (`you can't vote and your age is ${age}`);
    }
}

voter(23,(error , success)=>{
    if (success){
        console.log(success);
    }
    else {
        console.log(error);
    }
});