let pizza: string[] = ["Afghani Feast", "BBQ Chicken", "Fajita"];// This saves the names
// This prints the name of Pizza's
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
// This prints the name of Pizza's with my feelings about them
pizza.forEach(pizza => {
console.log(`I like ${pizza} Pizza.`)
});
// This prints a simple sentence
console.log("I really love Pizza!");