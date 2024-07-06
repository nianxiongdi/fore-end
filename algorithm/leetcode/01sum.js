/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
 
    for(let i=0; i<nums.length; i++) {
        let num = nums[i];

        const endIndex = nums.indexOf(target - num)
        if (~endIndex && endIndex !== i) {
            return [i, endIndex]
        }


    }

};

nums = [2,7,11,15], target = 9
twoSum(nums, target)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    const map = {}
    for (let i=0; i<nums.length; i++) {
        if (typeof map[target - nums[i]] === 'number') 
            return [map[target - nums[i]], i]
        map[nums[i]] = i
    }

};






/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map()
    for (let i in nums) {
        if(map.has(target - nums[i])) return [map.get(target - nums[i]), i]
        map.set(nums[i], i)
    }
 };
