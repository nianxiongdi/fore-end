// 交换数组中两个元素的位置
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 将指定索引处的元素在堆中进行调整，使其满足堆的性质
function heapify(arr, size, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < size && arr[largest] < arr[left]) {
      largest = left;
  }

  if (right < size && arr[largest] < arr[right]) {
      largest = right;
  }

  if (largest !== i) {
      swap(arr, i, largest);
      heapify(arr, size, largest);
  }
}


/**
 * 堆排序函数
 * 时间复杂度：O(nlogn)
 * 空间复杂度： O(n)
 * 稳定性：  稳定
 * 排序方式： 外排序
*/
function sortArray(arr) {
  const size = arr.length;

  // 构建初始最大堆
  for (let i = (size >> 1) - 1; i >= 0; i--) {
      heapify(arr, size, i);
  }

  // // 从堆中提取元素并进行排序
  for (let i = size - 1; i > 0; i--) {
      swap(arr, 0, i); // 末尾元素是最大的
      heapify(arr, i, 0); 

      console.log(arr);
  }

  return arr;
}

let arr = [3,1,5,2,4,9,6]


console.log(sortArray(arr));