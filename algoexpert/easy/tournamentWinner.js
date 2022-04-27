
/**
 Winner of tournament has the most points
 edge cases: - tournament will have at least two teams
 - what if there's a tie in total points => says there are no ties

 Approach:
 - have a an object map, key = team, value = points (initially 0)
 - iterate through length of arrays (competitions and results should have the same length)
   - check the current result: if its 0 => away won so +3 to map[awayTeam]
	  - if its 1 => home won so +3 to map[homeTeam]
 - at the end of the loop find the team with the max points from the map and return the team

 teamPointMap = {
   C++: 3,
	 Python: 6,
 }
 i = 2, currentResult = 1

 Time - O(n), where n is the number of competitions
 Space - O(m), where m is the number of teams

*/
function tournamentWinner(competitions, results) {
  // Write your code here.
	const teamPointMap = {};
	let max = 0;
	let winner = "";

	for (let i = 0; i < results.length; i++) {
		let curCompetition = competitions[i];
		if (results[i] === 0) { // away team won
		  teamPointMap[curCompetition[1]] = teamPointMap[curCompetition[1]] ? teamPointMap[curCompetition[1]] + 3 : 3;
			if (teamPointMap[curCompetition[1]] > max) { // compare with max
				max = teamPointMap[curCompetition[1]];
				winner = curCompetition[1];
			}
		} else { // home team won
		  teamPointMap[curCompetition[0]] = teamPointMap[curCompetition[0]] ? teamPointMap[curCompetition[0]] + 3 : 3;

			if (teamPointMap[curCompetition[0]] > max) { // compare with max
				max = teamPointMap[curCompetition[0]];
				winner = curCompetition[0];
			}
		}
	}

  return winner;
}

/**
 *
 * AlgoExperts Solution => code looks more cleaner
 * - takeaways - don't forget about destructuring!
 * - go for readability
 * - use helper functions if you can to break it down and make it more readable
 */

function tournamentWinnerSolution2(competitions, results) {
  // Write your code here.
	const scores = {};
	let max = 0;
	let currentBestTeam = "";

	for (let i = 0; i < results.length; i++) {
		const result = results[i];
		const [homeTeam, awayTeam] = competitions[i];

		const winningTeam = (result === 0) ? awayTeam : homeTeam;
		if (!(winningTeam in scores)) scores[winningTeam] = 3;
		else scores[winningTeam] += 3;

		if (scores[winningTeam] > max) {
			max = scores[winningTeam];
			currentBestTeam = winningTeam;
		}
	}

  return currentBestTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
