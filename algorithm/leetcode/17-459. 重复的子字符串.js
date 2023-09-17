/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern1 = function(s) {


    for (var i = 1; i <= s.length / 2 >>> 0; i++) {
        let match = true
        if (s.length % i !== 0) continue
        for (let j=i; j < s.length; j++) {
            if (s[j] !== s[j-i]) {
                match = false
                break
            }
        }
        if (match) return true

    }
    return false


};


/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {

    return (s+s).indexOf(s, 1) !== s.length

};


// s = "aba"
s = "aabaaba"


console.log(repeatedSubstringPattern(s));