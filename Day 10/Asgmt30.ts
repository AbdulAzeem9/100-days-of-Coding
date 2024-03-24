let usernames: string[] = ["Admin", "user1", "user2", "user3", "user4"];

usernames.forEach(usernames => {
    if (usernames === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
});