# include<stdio.h>
# include <iostream>
# include <cstring>
# include <algorithm>

using namespace std;


// struct 排序
typedef struct {
    char name[30];
    int score;
 
} St;

bool cmp(  St  a,   St  b) {
    return (a.score) > (b.score);
}
int main() {

    St st[20];

    st[0].score = 89;
    strcpy(st[0].name, "xt2");
    st[1].score = 60;
    strcpy(st[1].name, "xiaom");
    st[2].score = 70;
    strcpy(st[2].name, "xiaoz");

    sort(st, st+3, cmp);

    for(int i=0;i<3;i++) {
        cout<<"name: " << st[i].name << " score: " <<st[i].score<<endl; 
    }

    return 0;
}


