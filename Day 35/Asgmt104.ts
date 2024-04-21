// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
    const color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
    return color; // Returns the random color code
}

console.log(getRandomHexColor()); // Outputs a random color code like #ff3e12
// We generate a random number, convert it to hexadecimal,  and ensure it's 6 characters long.



//Error: Property 'padStart' does not exist on type 'string'. Do you need to change your target library? T
// ry changing the 'lib' compiler option to 'es2017' or later.

// 3     const color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");