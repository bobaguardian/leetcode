// https://leetcode.com/problems/palindrome-number/

// Given an integer x, return whether or not x is a palindrome number
// An integer is a palindrome when it reads the same backward as forward
// ex: 121 => true, 123 => not

/*
CQs:
- negative numbers? -121 => false
- numbers with just one digit? ex: 9? true?

I/O
- 121 => true
- 123 => false
- 10 => false
- 3 => true
- -3 => false
- we can exclude all negative numbers
- false if ends with 0

Approaches
- Compare the first and last digit, keeping pointers on each, when the pointers overlap
  we can say that all digits were matching so return true.  If any case we compare digits
  and they are not equivalent, we return false.
    - This requires us to convert the integer to a string first

Pseudocode
- convert integer to a string
- declare two variables, i = 0, j = string's length - 1
- while j > i
    - compare the string at index i and j - if they're not equal, return false
    - else increment i and decrement j (moving the pointers closer towards the center)
- after the while loop breaks, all comparisons result in true, so return true.

Analysis
- Time - O(n) => while loop to iterate through half of the size of x
- Space - O(n) => converted x into a string
*/

const isPalindrome = x => {
    if (x < 0) return false;

    let str = x.toString();

    let i = 0;
    let j = str.length - 1;

    while (j > i) {
        if (str[i] !== str[j])
            return false;
        else {
            i++;
            j--;
        }
    }

    return true;
}

/*
Follow Up: Can you solve it without converting the integer to a string?
Approach
- Take half of the number and reverse it and compare
    - ex: x = 1221

*/

const isPalindrome2 = x => {
    if (x < 0 || (x != 0 && x % 10 === 0)) {
        return false;
    }

    let revertedNum = 0;
    while (x > revertedNum) {
        let nextDigit = x % 10;
        revertedNum = revertedNum * 10 + nextDigit;
        x = Math.floor(x/10);
    }

    return x === revertedNum || x === Math.floor(revertedNum/10);
}
