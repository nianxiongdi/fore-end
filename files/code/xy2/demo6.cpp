#include <stdio.h>
#include <memory.h>
#include <algorithm>
using namespace std;
 
const int maxn = 25;
int g[maxn][maxn];
bool vis[maxn][maxn];
 
int Cover3_3(int x, int y)
{
    int sum = 0;
    for (int i = x - 1; i <= x + 1; i++){
        for (int j = y - 1; j <= y + 1; j++){
            if (g[i][j]){
                sum++;
            }
        }
    }
    return sum;
}
void remove3_3(int x, int y)
{
    for (int i = x - 1; i <= x + 1; i++){
        for (int j = y - 1; j <= y + 1; j++){
            if (g[i][j])g[i][j]--;
        }
    }
}
 
int Search(int n, int m)
{
    int x0, y0;
    int sum = -1;
    for (int i = 1; i <= n - 1; i++){
        for (int j = 1; j <= m - 1; j++){
            int tmp = Cover3_3(i, j);
            if (sum < tmp){
                sum = tmp;
                x0 = i;
                y0 = j;
            }
        }
    }
    remove3_3(x0, y0);
    return sum;
}
 
int main()
{
    //freopen("in.txt", "r", stdin);
    int n, m, k, x, y;
    while (scanf("%d %d %d", &n, &m, &k) != EOF){
        memset(g, 0, sizeof(g));
        while (k--){
            scanf("%d %d", &x, &y);
            g[x][y]++;
        }
        printf("%d\n", Search(n, m) + Search(n, m));
    }
    return 0;
}