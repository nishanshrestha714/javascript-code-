console.log("simple example in async and await ");

async function voter(age, callback) {
    

    if (age >= 18) {
        // Successful case: wait 3 seconds
        console.log("checking in status ....");
        setTimeout(async () => {
            
            await callback( `you can vote and your age is ${age}`);
            console.log("finished");
        }, 3000);
    } 
    else {
        // Error case: run immediately
        callback(`you can't vote and your age is ${age}`);
    }

    // console.log("teslai wait garena basne haina");
}

// Calling the function
voter(20, (error, success) => {
    if (success) {
        console.log( success);
    } else {
        console.log(error);
    }
});