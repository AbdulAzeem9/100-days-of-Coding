// This function rounds a decimal number to the nearest whole market
function roundToNearestInteger(num:number): number {
    return Math.round(num); // Rounds the number
}

// Example: Rounding a decimal 
console.log(roundToNearestInteger(4.7)); // Outputs 5
console.log(roundToNearestInteger(4.4)); // Outputs 4
// This shows how the function rounds number either up or down.