/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (i=0; i < s.length; i++) {
        if (s[i] === "?") {
            let tempAlphabet = alphabet.filter(l => (l != s[i-1] && l != s[i+1]))
            s = s.replace("?", tempAlphabet.pop())
        }
    }
    return s
};