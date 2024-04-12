// This function shows every detail about an object function
function logObjectProperties(obj: object) {
    for (let property in obj) {
        //loop through each property in the object 
        console.log(`${property}: ${obj[property]}`);
        // Shows the property name and its value
    }
}

// Using the function with a car object 
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "black"
});

// It tells us each piece of information stored about the car. 