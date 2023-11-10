/**
 * 希尔排序
 * 时间复杂度：O(nlogn)
 * 空间复杂度： O(1)
 * 稳定性：  不稳定
 * 排序方式： 内排序
*/
function shellInsertSort(a, n, dk) {

    for (let i=dk; i< n; i++) {
        let t = a[i]
        let j = i - dk
        if (a[i] < a[i-dk]) {
            while(t<a[j] && j>=0) {  // 升序
                a[j+dk] = a[j]
                j = j-dk
            }
            a[j+dk] = t
        }
    }

}

 
function shellSort(arr) {

    let dk = arr.length / 2 >>> 0

    while (dk >= 1) {
        
        shellInsertSort(arr, arr.length, dk)

        dk = dk /2 >>> 0

    } 

}


nums = [5,2,3,1]
shellSort(nums)
console.log( nums);


