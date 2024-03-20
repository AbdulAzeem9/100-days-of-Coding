let Guest: string[] = ["Rehman", "Ali", "Samad"];
console.log("Unfortunately, I can only invite 2 people for dinner.");

// Invitation cancelled
while (Guest.length > 2) {
    let removeGuest = Guest.pop();
    console.log(`Sorry, ${removeGuest} I can't invite you to dinner.`)
}

// New Invitation
Guest.forEach(guest=> {
console.log(`Dear ${Guest}, You are still invited to dinner.`);
});

Guest.splice(0, Guest.length);
console.log(Guest); // Shows an empty list