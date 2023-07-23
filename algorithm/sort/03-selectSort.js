/**
 * 选择排序
 * 时间复杂度：O(n^2)
 * 空间复杂度： 1
 * 稳定性： 不稳定
*/
function selectSort(arr) {
    for (let i=0; i< arr.length; i++) {
        let k = i;
        for (let j=i+1; j<arr.length; j++)
            if (arr[j] < arr[k]) k = j
    
        if (k !== i)  [arr[k], arr[i]] = [arr[i], arr[k]]
    }

    return arr
}


nums = [5,2,3,1]
selectSort(nums)
console.log( nums);