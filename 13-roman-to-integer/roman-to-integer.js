/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
  let response = 0

  for (let i = 0; i < s.length; i++) {
    map[s[i]] < map[s[i + 1]] ? response -= map[s[i]] : response += map[s[i]]
  }

  return response;
}