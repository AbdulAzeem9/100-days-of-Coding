// Equality with strings:
console.log("Equality with strings:");
console.log("book" === "Book"); // false 
console.log("book" === "book"); // true
// These tripple(=) signs are known as strict operators because they check the condition very strictly!

// Equality with lower case function:
console.log("Equality with lower case function:");
console.log("Book".toLowerCase() === "book");

// Numerical Tests:
console.log("Numerical Tests:");
console.log(5 > 10); // false
console.log(2 < 4); // true

// Tests using "AND" and "OR" operators:
console.log("Tests using 'AND' and 'OR' operators:");
console.log("AND operators");
console.log(true && true);
console.log(true && false);
console.log("OR operators");
console.log(true || false);
console.log(false || false);

// Testing whether an item in a array:
let fruits: string[] = ["apple", "cherry", "grapes"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));
console.log("Is 'mango' not in fruits?");
console.log(!
    fruits.includes("mango"));