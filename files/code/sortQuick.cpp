# include <iostream>
using namespace std;


int Find(int a[], int low, int high) {

    int val = a[low];
    while (low < high) {
        while(low<high && val<=a[high]) {
            high--;
        }
        a[low] = a[high];
        while(low<high && val>a[low]) {
            low++;
        }
        a[high] = a[low];
    }
    a[low] = val;
    return low;
}


void sortQuick(int a[], int low, int high) {
    if(low < high) {
        int position = Find(a, low, high);
        sortQuick(a, low, position-1);
        sortQuick(a, position+1, high);
    }

}

int main() {

    int a[] = {1,69,-5,26,-18883,-56};
    int len = sizeof(a)/sizeof(a[0]);

    sortQuick(a, 0, len-1);
    
    for(int i=0;i<len;i++) {
        cout<<a[i]<<" ";
    }

    cout<<endl;

    return 0;
}