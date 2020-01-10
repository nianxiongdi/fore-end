# include <iostream> 

using namespace std;

int BinarySearch(int a[], int val, int len) {

    int low, high, mid;
    low = 0, high = len-1;

    while (low < high) {
        mid = (low + high)/2;
        if(a[mid] == val){
            return mid;
        }else if(a[mid] > val){
            high = mid - 1;
        }else if(a[mid] < val) {
            low = mid + 1;
        }
    }

    return -1;
}

int main() {

    int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int len = sizeof(a)/sizeof(a[0]);
    int val = 6;

    int isval = BinarySearch(a, val, len);
    cout<<isval<<endl;

    return 0;
}