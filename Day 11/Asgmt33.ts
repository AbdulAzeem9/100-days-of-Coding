let number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(number => {
    let word: string = "th";
    if (number === 1) {
        word = "st"
    } else if (number === 2) {
        word = "nd"
    } else if (number === 3) {
        word = "rd"
    }
    console.log(`${number}${word}`);
});