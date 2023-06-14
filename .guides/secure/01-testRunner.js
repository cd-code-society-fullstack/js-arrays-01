const maxProfit = require("../../problem01");

let prices = process.argv[2].split(',').map(Number);
let fee = Number(process.argv[3]);

console.log(maxProfit(prices, fee));
