/**
 * 插入排序
 * 时间复杂度：O(n^2)
 * 空间复杂度： 1
 * 稳定性： 稳定
*/
// 升序
function insertSort1(arr) {
    for (let i=1; i < arr.length; i++) {
        let x = arr[i];

        // 只有当有序数组的最大值大于当前的哨兵时，才进行排序
        if (arr[i] < arr[i - 1]) {
            let j = i  - 1
            while(j>=0 && arr[j] > x) {
                arr[j + 1] = arr[j]
                j--
            }

            arr[j+1] = x
        }
    }

    return arr
}

// 降序 
function insertSort(arr) {
    for (let i=1; i < arr.length; i++) {
        let x = arr[i];

        // 只有当有序数组的最大值大于当前的哨兵时，才进行排序
        if (arr[i] > arr[i - 1]) {
            let j = i  - 1
            while(j>=0 && arr[j] < x) {
                arr[j + 1] = arr[j]
                j--
            }

            arr[j+1] = x
        }
    }

    return arr
}



nums = [5,2,3,1]
console.log( insertSort(nums));