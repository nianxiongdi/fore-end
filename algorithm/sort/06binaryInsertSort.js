


/**
 * 二分插入排序
 *
 * 时间复杂度： O(n^2)
 * 空间复杂度: O(1)
 *
*/
function binaryInsertionSort(arr) {

  let len = arr.length

  for (let i = 1; i < len; i++) {
    let val = arr[i]
    let left = 0
    let right = i - 1

    while (left <= right) {
      let mid = (left + right ) / 2 >>> 0
      if (val < arr[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    // 因为 i-1是一件排好序的
    for (let j = i -1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    arr[left] = val
  }

  return arr
}


// 示例测试
const arr = [5, 2, 9, 1, 5, 6];
const sortedArr = binaryInsertionSort(arr);
console.log(sortedArr); // 输出 [1, 2, 5, 5, 6, 9]
