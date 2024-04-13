// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavascriptWithTypescript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "Typescript");
    // Uses a regular expression with the 'g' flag for a global replacement
}

//Example: Changing a programming language name in a sentence
console.log(replaceJavascriptWithTypescript("I love JavaScript and JavaScript is awesome!"));

