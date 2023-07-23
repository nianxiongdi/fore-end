


function mergeSort(arr) {
  
  let middle = arr.length / 2 >>> 0

  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(left, right)
}


function merge(left, right) {
  let result = []
  let i = 0, j = 0
  while( i<left.length && j< right.length) {
    if (left[i]> right[j]) {
      result.push(right[j])
    }else {
      result.push(left[i])  
    }
  }

  while((i<left.length)) {
    result.push(right[i++])
  }

  while(j<right.length) {
    result.push(left[j++])
  }

  return result
}






var arr = [1, 2, 3, 5, 6, 7, 8, 9];
var result = mergeSort(arr);
console.log(result);  //[1, 2, 3, 5, 6, 7, 8, 9]