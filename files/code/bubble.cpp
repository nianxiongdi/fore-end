# include<cstdio>
# include<iostream> 
# include <vector>

using namespace std;

int main() {
    /*
    题目描述
        把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 
        例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
    */


    vector<int> arr;
    arr.push_back(3);
    arr.push_back(4);
    arr.push_back(5);
    arr.push_back(1);
    arr.push_back(2);

 
    if(arr.size() == 0) {
        return 0;
    };
    for(int i=0;i< arr.size() - 1; i++) {
        if(arr[i] > arr[i+1]) {
 
            return arr[i+1];
        }
    }
 
    
    return 0;
}