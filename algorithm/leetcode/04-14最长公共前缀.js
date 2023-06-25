/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    //垂直比较
    for(let i=0; i<strs[0].length; i++) {// 遍历列
        let char = strs[0][i]

        for(let j=0; j<strs.length; j++) { // 遍历行
            if (char !== strs[j][i]) 
                return strs[0].substring(0, i) 
        }
    }
    return strs[0]

};


console.log(longestCommonPrefix(["1flower","flow","flight"])); 