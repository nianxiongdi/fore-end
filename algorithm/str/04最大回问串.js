


/*

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

*/

function longestPalindrome(str) {
    let len = str.length
    if (len < 2) return str

    let maxLen = 1
    let res = str.slice(0, 1)

    for (let i=0; i<str.length; i++) {
        for (let j=i+1; j<str.length; j++) {
            if ((j - i + 1) > maxLen && valid(str, i, j)) {
                maxLen = j - i + 1
                res = str.slice(i, j+1)
            }
        }
    }
    return res

}



function valid(s, left, right) {
    // 验证子串 s[left, right] 是否为回文串
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


console.log(longestPalindrome("babad"));