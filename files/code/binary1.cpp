# include <iostream>
# include <algorithm>

using namespace std;
//https://www.cnblogs.com/wkfvawl/p/9475939.html
// http://c.biancheng.net/view/578.html
int main() {

    int a[100]= {4,10,11,30,69,70,96,100};
    int len = 8;

    int b=binary_search(a,a+len,4);//查找成功，返回1
    cout<<"在数组中查找元素4，结果为："<<b<<endl;

    int c=binary_search(a,a+len,40);//查找失败，返回0
    cout<<"在数组中查找元素40，结果为："<<c<<endl;

    int d=lower_bound(a,a+len,10)-a;
    cout<<"在数组中查找第一个大于等于10的元素位置，结果为："<<d<<endl;

    int e=lower_bound(a,a+len,101)-a;
    cout<<"在数组中查找第一个大于等于101的元素位置，结果为："<<e<<endl;

    int f=upper_bound(a,a+len,10)-a;
    cout<<"在数组中查找第一个大于10的元素位置，结果为："<<f<<endl;
    
    int g=upper_bound(a,a+len,101)-a;
    cout<<"在数组中查找第一个大于101的元素位置，结果为："<<g<<endl;

   
    return 0;
}
