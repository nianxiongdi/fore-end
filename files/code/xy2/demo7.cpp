/*
小Q得到一个神奇的数列: 1, 12, 123,...12345678910,1234567891011...。

并且小Q对于能否被3整除这个性质很感兴趣。

小Q现在希望你能帮他计算一下从数列的第l个到第r个(包含端点)有多少个数可以被3整除。

输入描述:
输入包括两个整数l和r(1 <= l <= r <= 1e9), 表示要求解的区间两端。
输出描述:
输出一个整数, 表示区间内能被3整除的数字个数。

2 5

3
*/

#include <stdio.h>
#include <memory.h>
#include <algorithm>
#include <iostream>

using namespace std;
 

int main() {

    // int dp[1000000009] = {0};
    // dp[0] = 0;
    // for(int i=1;i<=1000000000; i++) {
    //     dp[i] = (dp[i-1] + i)%3;
    // }

    // int sum = 0;
    // int n, m;
    // cin>>n>>m;
    // for(int i=n;i<=m;i++) {
    //     sum += dp[i]==0? 1: 0;
    // }

    // cout<<sum<<endl;

    int n, m;
    while(cin>>n>>m){
        int val = 0;
        int count = 0;
        for(int i=n;i<=m;i++) {
            int t;
            t = i;
            if(n == i) {
                val = 0;
                while(t>=1) {
                    val = (val + t) % 3;
                    t--;
                }
            }else {
                val = (val+i%3)%3;
            }

            if(val == 0) {
                count++;
            }
        }

        cout<<count<<endl;
    }
    

    return 0;
}

