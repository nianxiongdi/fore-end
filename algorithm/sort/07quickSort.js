



function find(arr, low, high) {

  let val = arr[low];
  while (low < high) {
      while(low<high && val<=arr[high]) {
          high--;
      }
      arr[low] = arr[high];
      while(low<high && val>arr[low]) {
          low++;
      }
      arr[high] = arr[low];
  }
  arr[low] = val;
  return low;
}

/**
 * 非递归
 * 时间复杂度： O(nlog(n))
 * 空间复杂度: O(log(n))
 * 稳定性： 不稳定
*/
function quickSort1(arr) {
    if (arr.length <= 1) return arr

    let stack = []

    stack.push(0)
    stack.push(arr.length - 1)


    while (stack.length > 0) { 
      let right = stack.pop()
      let left = stack.pop()

      let position = find(arr, left, right)

     // 将左右子数组入栈，以便后续排序
     if (position - 1 > left) {
        stack.push(left)
        stack.push(position - 1)
      }

      if (position + 1 < right) {
        stack.push(position + 1)
        stack.push(right)
      }
      // sortQuick(a, low, position-1);
      // sortQuick(a, position+1, high);
    }

    return arr
}


/**
 * 递归
 * 时间复杂度： O(nlog(n))
 * 空间复杂度: O(log(n))
 * 稳定性： 不稳定
*/
function sortArray(arr) {
  function quickSort(arr, left, right) {
    if (arr.length <= 1) return arr
  
    if (left < right) { 
  
      let position = find(arr, left, right)
      // console.log(left, right)
      quickSort(arr, left, position-1);
      quickSort(arr, position+1, right);
    }
  
    return arr
  }
  return quickSort(arr, 0, arr.length-1)
}

// console.log(quickSort([1,69,-5,26,-18883,-56]))
console.log(sortArray([5,1,1,2,0,0]))


