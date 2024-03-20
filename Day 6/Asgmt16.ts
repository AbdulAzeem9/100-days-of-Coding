let guest: string[] = ["Emily", "James", "Charles"];
console.log("Great News! I found a bigger dinner table");

// Adding more guests
guest.unshift("Michael")
guest.splice(guest.length / 2, 0, "Newton")
guest.push("Einstein")

// New Invitations
guest.forEach(guest => {
    console.log(`Dear ${guest}, You will eat dinner with us tonight!`)
})