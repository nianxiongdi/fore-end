# include <stdio.h>
 
/**
  a是完全二叉树 
  i是父节点
  size 一共有多少个节点 
*/
//此函数是构建堆，从最后一页叶子节点开始遍历，利用递归 
void heapify(int a[],int i,int size){
	//此方法是比较三个节点的大小的关系，父，两个子 
	
	
	/**
		左孩子   2i+1
		右孩子   2i+2 
	*/ 
	if(i<size){
		int left = i*2 + 1; //左孩子 
		int right = i*2 + 2;//右孩子 
		int largest = i;//当前父节点的下标 
	
		if(left < size) {
			if(a[largest] < a[left])  largest = left;
		}
		if(right < size) {
			if(a[largest] < a[right])  largest = right;	
		}
		//获取最大的节点 
		
		if(largest!=i){ //证明有最大的节点 
			int temp = a[largest];
			a[largest] = a[i];
			a[i] = temp;
			heapify(a,largest,size); //改变就递归 
		}
	}
}
 
/** 
 * 初始堆进行调整 
 * 将a[0..size-1]建成堆 
 * 调整完之后第一个元素是序列的最大的元素 
 * 意思就是把堆有序 
 */ 
 
void max_heapfy(int a[],int size){
	
	int i;
	for(i=(size-1)/2;i>=0;i--){
		heapify(a,i,size);
	}
	
}
 
/** 
 * 堆排序算法 
 */  
void heap_sort(int a[],int size){
	
	int i;
	for(i=size-1;i>=0;i--){//从最后一个节点开始 
		max_heapfy(a,i+1);
		int temp = a[0];
		a[0] = a[i];
		a[i] = temp; 
	}
	
}
 
int main(){
	
	int a[8] = {3,1,5,2,4,9,6};  
    heap_sort(a,7);  
    for(int i=0;i<7;i++){
    	printf("%d ",a[i]);
    }
    printf("\n");
	
	return 0;
}