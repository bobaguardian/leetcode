/**
edges cases: given no coins, output => 1 => soo we should start i = 1 and
increment to see if we can generate the amount of change with the coins we have

coins = [5, 7, 1, 1, 2, 3, 22] sort

	// create variable (curAmount) to store amount of change we can generate up to
	// sort coins and iterate
	  - compare current coin to curAmount
		  - if coin > curAmount: return curAmount + 1 (cant create that amount of change)
			- else curAmount += coin

	Time: O(n) where n is the number of coins
	Space: O(1)
*/
function nonConstructibleChange(coins) {
  // Write your code here.
  let curAmount = 0;
	coins = coins.sort((a, b) => a - b);
	for (const coin of coins) {
		if (coin > curAmount + 1) return curAmount + 1;
		curAmount += coin;
	}

	return curAmount + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
