/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let array = [1, 1]
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}