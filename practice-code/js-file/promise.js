// promise in js 
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'nishan' };
            if (success) {
                resolve(data);
            } else {
                reject('Error: Unable to fetch data');
            }
        }, 2000);
    });
}




// Using the promise
// the promise is Promise is an object that represents the eventual completion or failure of an asynchronous operation.
//It can be in one of three states:

///Pending: Still working (e.g., waiting for a pizza to be cooked).

//Fulfilled (Resolved): Success! You got the result (e.g., the pizza arrives).

//Rejected: Something went wrong (e.g., the pizza shop ran out of dough).
 // so example 

 let number= new Promise((resolve, reject) =>{

let a=10;
let b=20;
if (a+b ===30){
    resolve(' this is correct number');
}
else{
    reject (' this is not correct number');
}
    });

// so to used in then() and catch() method in promise in if else condition
    number.then((success)=>{
       console.log(` ${success}`);
    });
    number.catch((error)=>{
        console.log(error.message);
    });

    
    // so function used in this qn handle 
    function add (a,b ){
        return new Promise((resolve, reject)=>{
            // check the number input in number or yo number ho nai vanera chaeck garne
        //  if (typeof a ==='number' && typeof b ==='number' ) // this condiion is not used this cade in the function 
            if (typeof a !=='number' || typeof b !=='number' )
        {
                reject (' this is not valid number');
            }
            else{
                //resolve(` this is total sum ${a + b}`);
                let sum = a + b;
                resolve (` this is total sum ${sum}`);
            }
        });
    };
//add ("three","three") not to used in string in qn this  is not number
    add (4,4).then ((right)=>{
        console.log(right);
    })
    .catch((wrong)=>{
        console.log(wrong);
    });

    // to find in vote or not vote 
    function voter(age){
        return  new Promise ((result,error)=>{
            if (age >=18){
                result (`  you can vote your age is ${age}`);
            }
            else{
                error(  `you can't vote your age is ${age}` );
            };
        });
    }; 

voter(20)
    .then((success)=>{
        console.log(success)
    });
     voter(20) .catch((error)=>{  
        console.log(error);
    });
// you can vote 
// to database checking in the 

function userdata(username, password){
    return new Promise ((success, defult)=>{
        if(username ==="nishan" && password === 12345){
            //  success ( name:"nishan");
            // so error in the from to object used in this case in used code 
              // object vako le {} ma used 
            success({name:"niahan"});
        }
        else{
            defult (' invalid username and password');
        };
    });
};

userdata("nishan",12345)
.then((login)=>{
    console.log(`login succesfull ${login.name} you are login in device.`);
});
 userdata("nishan",12345).catch((error)=>{
    console.log(error);
});


//  hard code in promise in js to login system same in up (mathi ko ) similary 

function loginSystem(email, password){
     return new Promise ((loginSuccess, loginFail)=>{
        if (!email|| !password){
            loginFail (`please enter the username and password.`);
        }
        else if(email ==="niahanshrestha12@gmail.com" &&password === "@Nishan123"){
            loginSuccess (` hi! nishan login sucessfully in  your device.`);
        }
        else {
            loginFail (' invalid username and password');
        }
     });
}

loginSystem("niahanshrestha12@gmail.com", "@Nishan123")
.then((success) => {
    console.log(success);
})
.catch((error) => {
    console.log(error);
});




// so  another example in promise in js

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate fetching user data from a database
        setTimeout(() => {
            if (userId === 123) {
                resolve({ id: 123, name: "Nishan Shrestha", email: "nishan@example.com" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}

fetchUserData(123)
    .then((userData) => {
        console.log("User Data:", userData);
    })
    .catch((error) => {
        console.log("Error:", error);
    });



    // another example in promise 
            // payment system in promise
            function pyamentsystem(amount){
                return new Promise ((resolve, reject)=>{
                    if (amount>=0){
                        resolve (`  the payment successful of amount ${amount} rupise.`); 

                    }
                    else{
                        reject(`payment failed .`)
                    };
                });
            }


            pyamentsystem(1).then((payementVayo)=>{
                console.log(payementVayo);
            });
            pyamentsystem(1).catch((pymentFailed)=>{
                console.log(pymentFailed);
            });



            // file upload system in promise
            function fileupload (fileSize){
                return new Promise ((upload, notupload)=>{
                    if (fileSize <=10000){
                        upload (` file upload successful . the file size is ${fileSize} KB.`);
                    }
                    else{
                        notupload (` file upload failed . the file size is ${fileSize} KB.`);
                    }
                });
            }
          

            //  export  in this function in another file 

            module.exports = fileupload;