let magicians: string[] = ["Alice", "David", "Chris"];
function show_Magicians(magicians: string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}
function make_Great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "The Great";
    }
}
make_Great(magicians);
show_Magicians(magicians);

// function show_Magicians(magicians: string[]) {
//     magicians.forEach(magicians => {
//         console.log(`The Great Magician ${magicians}`);
//     });
// }

// show_Magicians(magicians);