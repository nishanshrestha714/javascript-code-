function areaCalcule(l ,b ,callback){
   let results=l*b;
   callback(results);
}

areaCalcule (2,4,(results)=>{
    console.log(` the area of ${results}`);
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
    setTimeout(()=>{
        callback(message);
    } ,time);
}
delaymessage(`this is delay messsage in callback function`,5000,(data)=>{
    console.log(data);
});
// expected output after 5 seconds: this is delay messsage in callback function

