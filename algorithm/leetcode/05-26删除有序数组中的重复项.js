/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {


    let low = 0; // 记录不重复的下标
    let fast = 0 //进行遍历
    
    while (fast < nums.length) {
        if (nums[fast] === nums[fast + 1]) {
            fast++
        } else {
            nums[++low] = nums[++fast]
        }
    }

    return low
};

nums = [1,1,2]

console.log(removeDuplicates(nums));


