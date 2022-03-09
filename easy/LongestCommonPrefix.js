// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string
// amongst an array of strings. If there is no common
// prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].startsWith(prefix + letter))
                return prefix;
        }
        prefix += letter;
    }
    return prefix;
}
