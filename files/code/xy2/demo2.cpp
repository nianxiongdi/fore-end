/*



题目描述
小v今年有n门课，每门都有考试，为了拿到奖学金，小v必须让自己的平均成绩至少为avg。每门课由平时成绩和考试成绩组成，满分为r。现在他知道每门课的平时成绩为ai ,若想让这门课的考试成绩多拿一分的话，小v要花bi 的时间复习，不复习的话当然就是0分。
同时我们显然可以发现复习得再多也不会拿到超过满分的分数。为了拿到奖学金，小v至少要花多少时间复习。
输入描述:
第一行三个整数n,r,avg(n大于等于1小于等于1e5，r大于等于1小于等于1e9,avg大于等于1小于等于1e6)，接下来n行，每行两个整数ai和bi，均小于等于1e6大于等于1
输出描述:
一行输出答案。
示例1
输入
复制
5 10 9
0 5
9 1
8 1
0 1
9 100
输出
复制
43

*/


# include <iostream>
# include <cstdio>
# include <algorithm>

using namespace std;

typedef struct {
    int current;
    int times;
}St;

bool cmp(St item1, St item2){
    return item1.times < item2.times;
}

int main(){

    St st[100000];
    long n, r, avg;
    long total,current_score;

    while(cin>>n>>r>>avg) {

        // cout<<n<<r<<avg<<endl;

        total = n*avg;
       current_score = 0;
        for(int i=0; i<n; i++) {
            cin>>st[i].current>>st[i].times;
            current_score += st[i].current;
        }
        sort(st, st+n, cmp);

        long need_score = total - current_score;
        long times = 0;
        for(int i=0; i<n; i++) {
            
            if(need_score <=0) {
                times += need_score * st[i-1].times;
                break;
            }else {
                need_score -= (r - st[i].current);
                times += (r - st[i].current)*st[i].times;
            }

        }

        cout<<times<<endl;
    }
    
  
    return 0;
}