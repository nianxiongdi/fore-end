/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */


// pos['a'] 1
// 
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let pos = {} // 保存最新的位置
    // j 保存的是最大的位置
    for (let i=0, j=0; i<s.length; i++) {
        j = Math.max(j, (pos[s[i]]  + 1) || 0) // 最新的开始位置
        ans = Math.max(ans, i - j + 1)
        pos[s[i]] = i
    }
    return ans
};
// @lc code=end


lengthOfLongestSubstring('aaaabcda')

// https://www.bilibili.com/video/BV1GM4y1F7vn/?spm_id_from=333.337.search-card.all.click&vd_source=bc391c59e3a6687c627ad9ea1e503dff