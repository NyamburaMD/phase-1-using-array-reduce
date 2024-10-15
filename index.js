const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Example array, make sure to use the provided one in index.js

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); // This will log the total sum of all the batteries

