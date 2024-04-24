function guessTheAge(age: number): string {
    if (age < 13) {
        return "child";
      } else if (age <= 19) {
        return "teenager";
      } else {
        return "adult";
      }
}

console.log(guessTheAge(9)); // Outputs: child
console.log(guessTheAge(28)); // Outputs: adult
console.log(guessTheAge(15)); // Outputs: teenager
// Based on the age provided, we log the corresponding age group.