#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
#include <functional>
#include <vector>
#include <iomanip>
using namespace std;
 
int main()
    {
  int n, L;
    while (cin >> n >> L)
    {
        vector<int> a(n);
        for (int i = 0; i < n; i++)
        {
            cin >> a[i];
        }
 
        sort(a.begin(), a.end());
        int maxDif = 0;
        for (int i = 1; i < n; i++)
        {
            if (maxDif < a[i] - a[i - 1])
                maxDif = a[i] - a[i - 1];
        }
        int m = L - a[n-1];
        if (m < a[0])
            m = a[0];
 
        double ret = 0;
        if (2 * m > maxDif)
            ret = m;
        else
            ret = (double)maxDif / 2.0;
cout << setiosflags(ios::fixed);
        cout.precision(2);
        cout << ret << endl;
    }
}
