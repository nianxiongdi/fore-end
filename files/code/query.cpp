# include <cstdio>
# include <iostream>

using namespace std;

int main() {

    int arr[] = {10, 23, 64, 100, 123};
    int len = sizeof(arr)/sizeof(arr[0]);
    int low = 0;
    int high = len -1;
    int val = -23;

    int mid = 0;
    while(low < high) {
        mid = (low + high) / 2;
        if(arr[mid] > val) {
            high = mid - 1;
        }else if(arr[mid] < val) {
            low = mid + 1;
        }
        // cout<<"123";
    }
    if(val == arr[high]) {
        cout<<arr[high]<<endl;
    }else {
        cout<<"not found!"<<endl;
    }
    

    return 0;
}