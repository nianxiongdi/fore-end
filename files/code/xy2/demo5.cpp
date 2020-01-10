/*


在N*M的草地上,提莫种了K个蘑菇,蘑菇爆炸的威力极大,兰博不想贸然去闯,而且蘑菇是隐形的.只 有一种叫做扫描透镜的物品可以扫描出隐形的蘑菇,于是他回了一趟战争学院,买了2个扫描透镜,
一个 扫描透镜可以扫描出(3*3)方格中所有的蘑菇,然后兰博就可以清理掉一些隐形的蘑菇. 问:兰博最多可以清理多少个蘑菇?
注意：每个方格被扫描一次只能清除掉一个蘑菇。
输入描述:
第一行三个整数:N,M,K,(1≤N,M≤20,K≤100),N,M代表了草地的大小;
接下来K行,每行两个整数x,y(1≤x≤N,1≤y≤M).代表(x,y)处提莫种了一个蘑菇.
一个方格可以种无穷个蘑菇.
输出描述:
输出一行,在这一行输出一个整数,代表兰博最多可以清理多少个蘑菇.
*/



# include <iostream>
# include <cstdio>
# include <algorithm>
# include <set>
# include <cstdlib>
# include <cstring>
using namespace std;
 

int main() {

    int a[100][100];
    int n, m, k;
    int x, y;
    memset(a, 0, sizeof(a));
    int c[5] = {-1,0,1};
    int result_xy[3][3] = {0};
    
    while(cin>>n>>m>>k) {
        
        for(int i=0; i<k; i++) {
            cin>>x>>y;
            a[x-1][y-1]++;
        }
        int max1 = -1;
        int max2 = -1;

        for(int i=1;i<n-1;i++) {
            for(int j=1;j<m-1;j++) {
                int center_x=i,center_y=j;
                int t = 0;
                for(int s=0; s<3; s++) {
                    for(int h=0; h<3; h++) {
                        if(a[center_x+c[s]][center_y+c[h]]) {
                            t++;
                        }
                    }
                }
                if(t > max1) {
                    max1 = t;
                    result_xy[0][0] = center_x;
                    result_xy[0][1] = center_y;
                }
            }
        }
        
        for(int s=0; s<3; s++) {
            for(int h=0; h<3; h++) {
                if(a[result_xy[0][0]+c[s]][result_xy[0][1]+c[h]]) {
                    a[result_xy[0][0]+c[s]][result_xy[0][1]+c[h]]--;
                }
            }
        }

        for(int i=1;i<n-1;i++) {
            for(int j=1;j<m-1;j++) {
                int center_x=i,center_y=j;
                int t = 0;
                for(int s=0; s<3; s++) {
                    for(int h=0; h<3; h++) {
                        if(a[center_x+c[s]][center_y+c[h]]) {
                            t++;
                        }
                    }
                }
                if(t > max2) {
                    max2 = t;
                }
            }
        }
  
        cout<<max1+max2<<endl;
 
    }
  
    return 0;
}
 