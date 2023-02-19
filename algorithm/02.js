/*
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
*/

// https://leetcode.cn/problems/maximum-subarray/solution/zui-da-zi-xu-he-cshi-xian-si-chong-jie-fa-bao-li-f/
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) O(1)
var maxSubArray = function(nums) {
    
    let max = -Number.MAX_VALUE
    let sum = 0
    for (let i=0; i<nums.length; i++) {
        sum += nums[i]

        max = Math.max(sum, max)
        if (sum<0) {
            sum = 0
        }
    }

    
    return max


};


console.log(maxSubArray([-1]))