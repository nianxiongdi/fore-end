/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray1 = function(nums) {
    for(let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] > nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            }
        }
    }
 };

 var sortArray = function(nums) {
    var len = nums.length;
    var lastSwapIndex = len - 1; // 记录最后一次交换的位置
    for (var i = 0; i < len - 1; i++) {
      var swapped = false;
      let end = lastSwapIndex
      for (var j = 0; j < end; j++) { // 仅比较到最后一次交换的位置
        if (nums[j] > nums[j + 1]) {
          var temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
          swapped = true;
          lastSwapIndex = j; // 更新最后一次交换的位置
        }
      }
      if (!swapped) {
        break;
      }
    }
    return nums;   
 };
 https://leetcode.cn/problems/sort-an-array/solution/python-shi-xian-de-shi-da-jing-dian-pai-xu-suan-fa/



 nums = [5,2,3,1]
console.log( sortArray(nums));