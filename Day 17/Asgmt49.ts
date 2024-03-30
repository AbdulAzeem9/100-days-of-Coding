//Define the function that accepts multiple hobbies as arguments
function log_hobby(...hobbies: string[]) {
    // Loops through each hobby in the array 
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
    })
};

// Calls the function with three hobbies 
log_hobby("Riding", "Gaming", "Reading");