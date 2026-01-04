//Calculate finalPrice = salary - 0.1*salary and round it to the nearest integer.
let salary=15000;
let discount=10/100;
console.log(discount);
let discontAmount=(discount*salary);
console.log("the discount amount is " + discontAmount);
console.log(typeof discontAmount);
let finalPrice=(salary-discontAmount);
console.log("The final price is "+finalPrice);
console.log(typeof finalPrice);
let RounderFinalPrice=Math.round(finalPrice);
console.log(RounderFinalPrice);

//at a restaurant you eat 1 dal 100,2 roti 10 each 1 iceceram 30 calculae the final amount 
//dal
let dal=1
let DalPrice=100;
let FinalDalPrice=(dal*DalPrice);
console.log("final dal price is"+FinalDalPrice);
//roti 
let roti=2;
let RotiPrice=10;
let FinalRotiPrice=(roti*RotiPrice);
console.log("final roti price is "+FinalRotiPrice);
//icecream
let iceceram=30;
console.log("final price iss icream"+iceceram);
//total
let total= (FinalDalPrice +FinalRotiPrice + iceceram);
console.log("the total preice  is "+total);

//
//Function Rest Parameter in 
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
//1. multiple value in add in parameter


function MultipleValueAdd(...numbers) {
    let MultipleValueAddInSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        MultipleValueAddInSum += numbers[i];
    }

    return MultipleValueAddInSum;
}

console.log(MultipleValueAdd(1, 3, 3, 4, 4, 5, 4, 3, 4)); // Output: 31









