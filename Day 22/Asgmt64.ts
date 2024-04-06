// This function mixes a text anda number into one text
function combiningStringAndNumber(text: string, number: number): string {
    // Joins the text and number into a singal text
    return text + number;
};

//Trying it out with age and 30
console.log(combiningStringAndNumber("Age: ", 30));// Shows "Age: 30"
//Here, we put together the text and number