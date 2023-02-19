/*
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
*/

// https://leetcode.cn/problems/maximum-subarray/solution/zui-da-zi-xu-he-cshi-xian-si-chong-jie-fa-bao-li-f/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = -Number.MAX_VALUE

    for (let i=0; i<nums.length; i++) {
        let sum = 0
        for (let j=i; j<nums.length; j++) {
            sum += nums[j]
            if (sum > max) {
                max = sum
            }
        }
    }

    
    return max


};


console.log(maxSubArray([-1]))