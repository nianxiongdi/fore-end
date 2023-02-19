/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1
//  var twoSum = function(nums, target) {

//     const map = new Map()
//     for (let i=0; i<nums.length+1; i++) {
//         if (map.has(target-nums[i])) return [map.get(target-nums[i]), i]
//         map.set(target-nums[i], i)
//     }


// };
// 2.
var twoSum = function(nums, target) {
    let obj = {}
    for (let [index, item] of nums.entries()) {
        obj[item] = index
    }

    for (let i=0; i<nums.length; i++) {
        if (obj[target-nums[i]]>0 && obj[target-nums[i]] !== i) { 
            return [i, obj[target-nums[i]]]
        }
    }
}


// def twoSum(nums, target):
//     hashmap={}
//     for ind,num in enumerate(nums):
//         hashmap[num] = ind
//     for i,num in enumerate(nums):
//         j = hashmap.get(target - num)
//         if j is not None and i!=j:
//             return [i,j]


// https://leetcode.cn/problems/two-sum/solution/xiao-bai-pythonji-chong-jie-fa-by-lao-la-rou-yue-j/


console.log(twoSum([3,2, 4], 6))

