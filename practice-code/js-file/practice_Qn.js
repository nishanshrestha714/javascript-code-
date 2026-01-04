// find the power value in number 
console.log(2 ** 2);
// length check 
let language = "javascript";
let basic="simple  language "
console.log(language.length);

//uppercace and lowercase
console.log(language.toUpperCase());
console.log(language.toLowerCase());
//remove in the space in 
console.log(language.trim());
//first 4 characters string in print 
console.log(language.slice(0,4));
console.log(language.substring(0,4));
//last 5 characters string in print 
console.log(language.slice(-5));
//contatenate in 2 string 
console.log(`the programing language is ${language}.and this is ${basic} `);
console.log("the programing language is"+" "+language +" "+ "and this is" + " "+basic);
//access the first characters in a 
console.log(language[0]);
// last characters in a 
console.log(language[ language.length - 1 ]);
//check in  string in java 
console.log(language.includes("java"));
//find the position of a 
console.log(language.indexOf("a"));
//last a position 
console.log(language.lastIndexOf("a"));
//check the string in start in "Mr"
let email="Mr.123@gmail.com";
console.log(email.includes("Mr"));
//or
console.log(email.startsWith("Mr"));
 
//last in .com
console.log(email.endsWith(".com"));

//check the two string  in exactly equal
console.log(language == basic);
//or
console.log(language === basic);
//check equality ingnoring case 
console.log(language.toLowerCase()== basic.toLowerCase());
 //or
 console.log(language.toLowerCase()=== basic.toLowerCase());
 // check i @ 
 let check=(email.includes("@"));
 console.log(check);
 //check string is empty 
 //console.log(language.length===0);
  let massage =language==""?"is empty":" is not empty";
 console.log(  `the string ${massage}`);

 // replace in  string value in hi 
 let he="hello"
 console.log(he)
 let replace =(he.replace("hello","hi"));
 console.log(replace);
 //replace all space is hyphens 
 let name ='my name is nishan shrestha ';
 console.log(name.replaceAll(" ","-"));

 // 
























