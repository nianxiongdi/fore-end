/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {


    let low = 0
    let high = nums.length -1
    let mid
    while(low <= high) {
        mid  = Math.floor((low+high)/2)

        if (nums[mid] < target) {
            low = mid + 1
        }else  { // 关键是查找  target <= nums[mid]的值   
            high = mid - 1
        } 
    }

    return low

};


nums = [1,3,5,6], target = 5
// nums = [1,3,5,6], target = 0
// nums = [1,3,5,6], target = 7
console.log( searchInsert(nums, target) );