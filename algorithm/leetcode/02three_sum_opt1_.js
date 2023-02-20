/**
 * @param {number[]} nums
 * @return {number[][]}
 */


/*
https://leetcode.cn/problems/3sum/solution/15-san-shu-zhi-he-by-youky7-z7zy/
*/

var threeSum = function(nums) {
    nums.sort((a, b)=> {
        return a - b;
    })

    let res = []
    for(let i = 0; i < nums.length; i++) {
        let left = i+1
        let right = nums.length - 1

        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        while(left < right) {
            let sum = nums[left] + nums[right] + nums[i]

            console.log(111, i);
            if (sum > 0) right--
            if (sum < 0) left++
            if (sum == 0) {
                res.push([nums[i], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left+1] ) left++
                while (left < right && nums[right] === nums[right-1] ) right--
                left++
                right--
            }
        }
        // while(left < right && nums[i] === nums[i+1]) i++ 
    }

    return res
};


// nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
nums = [0,0,0,0]


// nums = [1,-1,-1,0]
// nums = [3,2,1]

// 该代码存在超市问题

// todo 优化

try {
    console.log(threeSum(nums))
} catch (error) {
    console.log(error);
}