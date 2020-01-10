/*
题目描述
一条长l的笔直的街道上有n个路灯，若这条街的起点为0，终点为l，第i个路灯坐标为ai ，每盏灯可以覆盖到的最远距离为d，为了照明需求，所有灯的灯光必须覆盖整条街，但是为了省电，要使这个d最小，请找到这个最小的d。
输入描述:
每组数据第一行两个整数n和l（n大于0小于等于1000，l小于等于1000000000大于0）。第二行有n个整数(均大于等于0小于等于l)，为每盏灯的坐标，多个路灯可以在同一点。
输出描述:
输出答案，保留两位小数。
示例1
输入
7 15
15 5 3 7 9 14 0
输出
    2.50
*/
# include <iostream>
# include <cstdio>
# include <algorithm>
# include <set>

using namespace std;
 
int main() {
 
    long n,l,m;
    long a[1003];
    cout<<max(0, 2.5)<<endl;
    while(cin>>n>>l) {
        for(int i=0;i<n;i++) {
            cin>>m;
            a[i] = m;
        }
        sort(a, a+n);
  
        long max1 = 0;
        long res = max(a[0], l - a[n - 1]);//边界判断
 
        for(int i=1; i<n; i++) {
            max1 = max(max1, a[i]-a[i-1]);
        
        }
        // cout<<max1<<endl;
        cout<<res*1.0<<endl;
        cout<<max1/2.0<<endl;

        res = max(res*1.0, max1/2.0);
        printf("%.2lf\n",max(res*1.0, max1/2.0));  
    }

    return 0;
}