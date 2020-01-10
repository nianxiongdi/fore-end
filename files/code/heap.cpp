#include<stdio.h>

# include <iostream>
using namespace std;


void headpify(int arr[], int i, int len) {
    if(i < len) {
        int left = i*2 + 1;
        int right = i*2 + 2;
        int largest = i;

        if(left < len && arr[left] > arr[largest]) largest = left;
        if(right < len && arr[right] > arr[largest]) largest = right;
        
        if(largest != i) {
            int temp = arr[largest];
            arr[largest] = arr[i];
            arr[i] = temp;
            headpify(arr, largest, len);
        }
    }
}

void max_heapfy(int arr[], int len) {
    int i;
    for(i=(len-1)/2; i>=0; i--) {
        headpify(arr, i, len);
    }
}


void heap_sort(int arr[], int len) {
    int i;
    for(i=len-1;i>=0;i--) {
        max_heapfy(arr, i+1);
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
    }
}


int main()
{
	// 定义一个整型数组, 并进行初始化赋值9个数据 : 
	int arr[7] = {3,1,5,2,4,9,6};  
	int len = sizeof(arr)/sizeof(arr[0]);
 

    heap_sort(arr, len);

    for(int i=0;i<len; i++) {
        cout<<arr[i]<<" ";
    }
    cout<<endl;

 
 
	
	return 0;
}