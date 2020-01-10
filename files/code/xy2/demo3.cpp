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

    set<long> s;
    long n,l,m;
    long a[1003];

    while(cin>>n>>l) {
        for(int i=0;i<n;i++) {
            cin>>m;
            // a[i++] = m;
            s.insert(m);
        }
 
        set<long>::const_iterator itr = s.begin();
        long a=0,b=0;
        long max = 0;
        a = *itr;
        while(itr != s.end()){ 
            b = *itr;
            if(b-a>max) {
                max = b - a;
            }
            a = b;
            itr++;
        }

        // cout<<max/2.0<<endl;
        printf("%.2f",max/2.0);
        
    }

    return 0;
}