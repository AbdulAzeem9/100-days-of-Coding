// A list showing a programmer's skills in details
let developerSkills = {
    languages: ["Typescript","Solidity","Python"],
    frameWorks: ["Angular", "React", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

// Getting specific skills from the list 
let {languages, frameWorks, tools} = developerSkills;

// Showing a skill from each category
console.log(`Languages: ${languages[0]}, Frameworks: ${frameWorks[0]}, Tools: ${tools[0]}`);