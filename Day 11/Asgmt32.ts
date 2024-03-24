let current_users: string[] = ["user1", "user2", "user3", "user4", "user5",];
let new_users: string[] = ["user4", "user5", "user6", "user7", "user8"];
new_users.forEach(new_users =>{
if (current_users.some(current_users => current_users.toLowerCase() === new_users.toLowerCase())) {
    console.log(`${new_users} will need to enter a new username.`);
} else {
console.log(`${new_users} is available.`)
}
})