function large_Shirts(size: string = "large", message: string = "I love Coding") {
    console.log(`Making a ${size} t-Shirt with the message "${message}" printed on it.`);
}
large_Shirts();//Default size and message 
large_Shirts("medium");//Medium size and Default message
large_Shirts("small", "Hustle");// Small size and Custom message 