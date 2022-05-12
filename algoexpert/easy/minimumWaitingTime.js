//[ 1, 3, 4, 5] => 1 + (1 + 3) + (1+3+4) +
// [4, 1, 5] => 0 + 4 + 1+ 4 => 9
// [5, 1, 4] => 0 + 5 + 5 + 1 =>  11
// should sort the queries ascending to get the minimum waiting time
// approach
// sort the queries array ascending
// create a totalTime = 0
// create a prevSum = 0
// iterate through queries until before the last element
// - add prev + current query to totalTime totalTime = 13
// - set prev = prev + current query prev = 8
// O(nlog(n)) time - sorting
// O(1) space

function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a, b) => a - b);
	let totalTime = 0;
	let prevSum = 0;

	for (let i = 0; i < queries.length - 1; i++) {
		const query = queries[i];
		totalTime += prevSum + query;
		prevSum += query;
	}

  return totalTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
