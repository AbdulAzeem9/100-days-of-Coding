let magicians: string[] = ["Alice", "David", "Chris"];

function show_Magicians(magiciansToShow: string[]) {
    magiciansToShow.forEach(magician => {
        console.log(magician);
    });
}

function make_Great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    })
    return greatMagicians;
}

let greatMagicians = make_Great(magicians.slice()); // creates a new modified array
console.log("Original Magicians:");

show_Magicians(magicians); // Show original names
console.log("Great Magicians:");

show_Magicians(greatMagicians); // Show Modified names
