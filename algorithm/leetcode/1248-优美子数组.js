


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    
    let ans = 0, sum = [0];

    // 奇数的子数组
    for (let i=0; i<nums.length; i++ ) {
        sum[i+1] = sum[i] + (nums[i] % 2)
    }
    // num
    // [0, 1, 1, 1, 1,1,2,1,1]

    // sum 一定是自增的，可以保证
    // [ 0, 1, 2, 3, 4, 5, 5, 6, 7]

    // count [1, 1, 1, 1, 1, 2, 1, 1, 0]
    //        0, 1, 2, 3, 4, 5, 6, 7, 8
    // 记录sum元素的个数
    let count = new Array(nums.length+1).fill(0)

    for (let i=0; i< sum.length; i++) {
        if (sum[i] - k >= 0) {
            ans += count[sum[i] - k]
        }

        count[sum[i]]++
    }

    return ans
};




console.log(numberOfSubarrays([1, 1, 1, 1,1,2,1,1], 3));
