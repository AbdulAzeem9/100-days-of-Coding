// This is Array Destructing:
let laptops: { name: string }[] = [
    {
        name: "Dell"
    },
    {
        name: "Apple"
    },
    {
        name: "Lenovo"
    }
];
let [laptop1, laptop2, laptop3] = laptops;
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
