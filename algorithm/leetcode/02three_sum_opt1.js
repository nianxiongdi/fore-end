/**
 * @param {number[]} nums
 * @return {number[][]}
 */


/*
https://leetcode.cn/problems/3sum/solution/15-san-shu-zhi-he-by-youky7-z7zy/
*/

 var threeSum = function(nums) {
    
    nums.sort((a, b) =>{
        return a - b
    })

    let res = []
    let i = 0
    for (let i=0; i<nums.length; i++){
        let left = i+1;
        let right = nums.length - 1

        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        while(left < right) {
            let sum = nums[right]  + nums[left] + nums[i]
           if(sum > 0){
                right--
            } if(sum < 0){
                left++
            }

            if (sum === 0) {
                let temp_arr = [nums[i], nums[left], nums[right]]
                res.push(temp_arr)
                while(left < right && nums[left+1] === nums[left]) left++ // 重复元素
                while(left < right && nums[right+1]=== nums[right]) right--
                left++
                right--
            } 
        }

    }

    return res
 
   
};


// nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
// nums = [0,0,0,0]


nums = [1,-1,-1,0]
// nums = [3,2,1]

// 该代码存在超市问题

// todo 优化

try {
    console.log(threeSum(nums))
} catch (error) {
    console.log(error);
}