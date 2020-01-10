# include<stdio.h>
# include <iostream>
# include <cstring>
# include <algorithm>

using namespace std;

int main() {

    int arr1[] = {2,5,6,8,9};
    int arr2[] = {1,2,4,7,10};
    int len1 = 5;
    int len2 = 5;

    int new_arr[100];
    int j=0,k=0,l=0;
    for(int i=0; i<len1+len2;) {
        if(arr1[j]>=arr2[k]&&j<len1 && k<len2){
            new_arr[i++] = arr2[k++];
        }else if(arr1[j]<arr2[k] && k<len2 && j<len1){
            new_arr[i++] = arr1[j++];
        }else {
            if(j < len1){
                new_arr[i++] = arr1[j++];
            }
            if(k < len2){
                new_arr[i++] = arr2[k++];
            }
            // break;
        }
    }

    for(int i=0; i<len1+len2; i++){
        cout<<new_arr[i]<<" ";
    }
    cout<<endl;


    return 0;
}


