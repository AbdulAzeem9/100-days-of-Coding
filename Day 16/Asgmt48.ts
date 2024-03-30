let priceSet1 = [1200, 500, 700];
let priceSet2 = [900, 4000, 1000];
let combinedPrice = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(combinedPrice);