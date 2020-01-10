#include<stdio.h>

# include <iostream>
using namespace std;
 
int conparam(int i, int j) {
    return i - j;
}

int main() {
    // 数组的排序
    int a[] = {2,4,1,23,5,76,0,43,24,65};
    int len = sizeof(a) / sizeof(a[0]);
    cout<<len<<endl;
    sort(a, a+len, conparam);
    for(int i=0;i<len; i++) {
        cout<<a[i]<<" ";
    }

    cout<<endl;

    return 0;
}


