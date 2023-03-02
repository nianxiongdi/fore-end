/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let prefix = strs[0]
    for(let i=1; i<strs.length; i++) {// 遍历列
        prefix = getCommonStrings(strs[i], prefix)
    }
    return prefix
};


var getCommonStrings = function(str='', str1='') {

    let count = 0
    for (let i=0; i<Math.min(str.length, str1.length); i++) {
        if (str[i] === str1[i]) {
            count++
        }else {
            break
        }
    }
    return str.substring(0, count)
}


console.log(longestCommonPrefix(["cir","car"]));