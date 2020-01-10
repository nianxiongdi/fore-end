 
#include<iostream>
#include<algorithm>
using namespace std;
struct STU{
    int b;
    int c;
}a[100000];
bool cmp(STU s1,STU s2){
    return s1.c < s2.c;
}
int main(){
    long i,j,n,r,nowscore,needscore,time,countscore,avg;
    while( cin >> n >> r >> avg ){
        time = nowscore = 0;
        for(i=0;i<n;i++){
            cin >> a[i].b >> a[i].c;
            nowscore += a[i].b;  
        }
        needscore = avg * n - nowscore;
        sort(a,a+n,cmp);
        for(i=0;i<n;i++){
            if( needscore <= 0 ){
                if(i>1)
                    time = time + needscore*a[i-1].c;
                cout << time << endl;
                break;
            }
            needscore = needscore - (r - a[i].b);
            time  = time + (r - a[i].b)*a[i].c;  
        } 
    }
    return 0;
}
