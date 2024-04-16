// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruit: string[]): void {
    const index = fruit.indexOf("Banana");
    if (index !== -1) fruit[index] = "Mango";
    // Replaces "Banana" with "Mango" if found 
}

// Example:  Replacing "Banana" in the array 
const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ["Apple", "Banana", "Cherry"]
// We're swapping "Banana" for "Mango" in our fruit list.