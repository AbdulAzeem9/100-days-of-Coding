// This function checks if a sentence has "JavaScript" in it 
function hasJavascript(str: string): boolean {
    return str.includes("JavaScript");
    // Checks for "JavaScript" and returns true or false
}

//Example: Seeing if a text mentions JavaScript 
console.log(hasJavascript("I love coding in JavaScript!"));
// Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false of it's not 