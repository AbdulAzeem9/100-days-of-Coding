// 12345
// Generates a Date for the next occurence of a specific birthday 
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday > today) {
        // If the birthday this year has already passed, use next Year's date 
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

// Replace with your birth month and day 
const nextBirthday = getNextBirthday(11, 9); //Example: November 9th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.