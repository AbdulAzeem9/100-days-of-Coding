function make_Sandwich(...items:string[]) {
    console.log(`Making a Sandwich with: ${items.join(',')}.`);
}

// Call the function three times with different numbers of arguments
make_Sandwich("Cheese", "Lettuce", "Tomato");
make_Sandwich("Ham", "Swiss Cheese");
make_Sandwich("Tuna Salad");