let guestList: string[] = ["Michael", "Trevor", "Franklin"];

let UnableToAttend: string = "Trevor"
console.log(`${guestList[1]} can't make it to dinner`)

let newGuest: string = "Robert" // Replace the guest
guestList[guestList.indexOf(UnableToAttend)] = newGuest;

// New Invitations
guestList.forEach(guestList => {
    console.log(`Dear ${guestList}, You will eat dinner with us tonight!`)
});