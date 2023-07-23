

/**
 * 归并排序
 * 时间复杂度：O(nlogn)
 * 空间复杂度： O(n)
 * 稳定性：  稳定
 * 排序方式： 外排序
*/
function mergeSort(arr) {
    
    if (arr.length < 2) return arr 

    let middle = arr.length / 2 >>> 0
 
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
  
    return merge(mergeSort(left), mergeSort(right))
  }
  
  
  function merge(left, right) {
    let result = []
    let i = 0, j = 0
    while( i<left.length && j< right.length) {
      if (left[i]> right[j]) {
        result.push(right[j++])
      }else {
        result.push(left[i++]) 
      }
    }
  
    while((i<left.length)) {
      result.push(left[i++])
    }
  
    while(j<right.length) {
      result.push(right[j++])
    }
  
    return result
  }
  
  
  
  
  
  
  var arr = [1, 2, 3, 5, 6, 7, 8, 9];
  var result = mergeSort(arr);
  console.log(result);  //[1, 2, 3, 5, 6, 7, 8, 9]