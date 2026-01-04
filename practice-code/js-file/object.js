// array explain 
//1.An array is an ordered collection of values. Each value in an array has an index, starting from 0.
// Arrays can hold any type of data, including numbers, strings, objects, or even other arrays.

// object in explain 
// 1.An object is a collection of key-value pairs.
//  Objects are used to represent real-world entities with properties and methods.
//or 
//An object is a collection of related data and functions.
//Think of it like a real-world object:
 
 // with example in code 

 let information ={
    name:"nishan shrestha",
    address:"sindhupalchock",
    age :23,

 };
 console.log(information );// to print in information details 

// nested objects 
// . nexted object is object into object 
 let studentdetails ={
      name :"nishan shrestha",
      roll:12,
      age:17,
      address:{
        currentAdddress:"chautara",
        province:"bagmati",

      }
 }
 //Dot notation:
 console.log(studentdetails.name); //mostly us in js // to acess in the name key used  in store value in display 
//Bracket notation:
console.log(studentdetails["age"]);//  it is right in code for condition in array 
//Bracket notation is useful if the key is stored in a variable: 
let keyvalue="address";
console.log(studentdetails[keyvalue]);//true is with acess in value is true 
console.log(studentdetails.key) //undefined in key value because key is not acess in the studentdetails 

// add in value 
console.log(studentdetails .name="nisha");// to change in name value in nisha 
console.log(studentdetails);// to change in value   in printed 
//Objects with Functions (Methods)

let details={
    // in function used 
    score: function(){
        console.log("hello nishan");
    }
};
details.score();// to print in hello nishan 

const keys=Object.keys(studentdetails);// to print in studentdetails in  all key in print 
console.log(keys);// keys print 
// to loop used in this code to studentdetails  value print in this loop used
// . length is used for in count the value in display 
// to start in 0 index in last index in object value is count   
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];// keys ko index of 0 to keys length  in with  example 
  // 0 index in name 
  // 1 index in rolls 
  console.log(key + ": " + studentdetails[key]);// in acess in the keys values in prints
  //console.log(key + ": " + studentdetails.address[key]);//


  let votes={
    age:23,
  };
  if (votes.age>=18){
    console.log("if you can vote");
  }
else{
    console.log("you can't vote ")
}

  // with example 
  // name :nishan 

}


//object destructuring

let destructuring={
   // keys and value 
   Name:"nishan ",
   address:{
    dis:"sindhuapchok",
    province:"bagmati",
     
   },
   emailaddress :{
     personal:"nishan12@gmail.com",
     offical:"nishanbroadyinfosys@gmail.com"

   }
}
console.log(` this is  object ${destructuring}`);// so  tihs is print in the keys and variable 
// in this destur
destructuring.Name="kumar";
console.log(destructuring);

// now start in object destructuring in this 
let {    Name:fullname, address:currentaddress , emailaddress:emails}=destructuring;
console.log(`my name is ${ fullname} .
   and i live in ${currentaddress.dis}.
  proince is ${currentaddress.province}. \n`);


let book = {
  title: "JS",
  author: {
    name: "Kyle"
  }
};

let { author } = book;
console.log(author.name);

let books ={
  tyes:{
    math:"opt math",
    english:"mejor english"
  },

  marks: 
  { math:[33,34,34,34,34,34,43,43,4,34,43],
    
  }

}
console.log(books. tyes );
console.log( books.marks);

// simple student  marks system in pass or fail 

let studentMarks={
name:"gita shrestha",
class:9,

checkResult: function(mark){
  if (mark<=30){
    return (`fails`);
  }
  else if (mark<=40 ){
    return (`the sturent name ${studentMarks.name} is grade C`);

  }
return mark;
}

}
console.log(studentMarks.checkResult(23));


// simple login 
let user = {
  username: "admin",
  password: "1234",

  login: function (inputUser, inputPass) {
    if (this.username === inputUser && this.password === inputPass) {
      console.log("Login Successful");
    } else {
      console.log("Invalid Login");
    }
  }
};











