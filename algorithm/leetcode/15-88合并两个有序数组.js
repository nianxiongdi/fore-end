/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
    输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    输出：[1,2,2,3,5,6]
    解释：需要合并 [1,2,3] 和 [2,5,6] 。
    合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */
// https://leetcode.cn/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/
// 逆向双指针
var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1

    while (i>=0 || j >= 0) {
        // 稳定排序
        if (j === -1){
            nums1[k--] = nums1[i--]
        }else if (i === -1){
            nums1[k--] = nums2[j--]
        }else if (nums1[i] <= nums2[j]) {
            nums1[k--] = nums2[j--]
        }else {
            nums1[k--] = nums1[i--]
        }
    }
    console.log(nums1);
};

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
nums1 = [0], m = 0, nums2 = [1], n = 1
// nums1 = [2], m = 1 , nums2 = [1], n = 1
// nums1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// m = 0
// nums2 = [-50,-50,-48,-47,-44,-44,-37,-35,-35,-32,-32,-31,-29,-29,-28,-26,-24,-23,-23,-21,-20,-19,-17,-15,-14,-12,-12,-11,-10,-9,-8,-5,-2,-2,1,1,3,4,4,7,7,7,9,10,11,12,14,16,17,18,21,21,24,31,33,34,35,36,41,41,46,48,48]
// n = 63
merge(nums1, m, nums2, n) 