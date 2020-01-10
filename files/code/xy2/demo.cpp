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

    St st[10000];
    int n, r, avg;
    int total,current_score, learn_times=0;

    cin>>n>>r>>avg;
    total = n*avg;

    for(int i=0; i<n; i++) {
        cin>>st[i].current>>st[i].times;
        current_score += st[i].current;
    }
    // cout<<current_score<<endl;
    sort(st, st+n, cmp);
    int falg = 0;

    for(int i=0; i<n; i++) {
        // cout<<i<<endl;
        int dis = r - st[i].current;
        dis *= st[i].times;
        if(dis+current_score < total) {
            current_score += dis;
            // cout<<current_score<<endl;
            learn_times += dis;
        }else if(dis+current_score == total) {
            learn_times += dis;
            break;
        }else {
            while(st[i].current <= r) {
                // cout<<current_score<<endl;
                if(current_score+1 < total) {
                    current_score++;
                    st[i].current++;
                    learn_times += st[i].times;
                }if(current_score+1 == total) {
                    current_score++;
                    st[i].current++;
                    learn_times += st[i].times;
                    falg = 1;
                    break;
                }
            }
            if(falg) {
                break;
            }
        }
        // cout<<current_score<<endl;

        // break;

    }

    cout<<learn_times<<endl;



    // for(int i=0; i<n; i++) {
    //     cout<<st[i].current<<" "<<st[i].times<<endl;
    // }

    




    return 0;
}