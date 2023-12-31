const maxProfit = (prices, fee) =>{
    let n = prices.length;
    let sell = 0, buy = -prices[0];
    for(let i = 1; i < n; i++){
        sell = Math.max(sell, buy + prices[i] - fee);
        buy = Math.max(buy, sell - prices[i]);
    }
    return sell;
}

module.exports = maxProfit;

