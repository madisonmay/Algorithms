/*
Insertion Sort
--------------
Advantages:
    - simple implementation
    - efficient for small data sets
    - efficient at sorting partially sorted datasets
    - can sort list as it is recieved
    - in-place
    - stable
Disadvantages:
    - quadratic time complexity
Time Complexity:
    - worst:   O(n^2)
    - average: O(n^2)
    - best:    O(n)
Space Complexity:
    - O(n)
*/

#include <iostream>
#include <vector>
using std::cout;
using std::vector;
using std::endl;

template<typename T>
void print(vector<T> l) {
    for (int i=0; i<l.size(); i++) {
        cout << l[i] << " ";
    }
    cout << endl;
}

template<typename T>
void insertion_sort(vector<T>& l) {
    //pass by reference is crucial
    int size = l.size();
    for (int i = 1; i < size; i++) {
        for (int j = i; j > 0; j--) {
            // iterate in reverse until element this[j] >= this[j-1]
            if (l[j] < l[j-1]) {
                // if elements are out of order,
                // swap them using a temporary variable
                T temp = l[j-1];
                l[j-1] = l[j];
                l[j] = temp;
            } else {
                break;
            }
        }
    }
}


int main() {
    // Testing
    vector<int> l = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    cout << "Unsorted list: ";
    print(l);
    insertion_sort(l);
    cout << "Sorted list: ";
    print(l);
    return 0;
}