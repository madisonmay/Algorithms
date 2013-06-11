/*
Bubble Sort:
stable
in-place
Time Complexity:
    - worst: O(n^2)
    - average: O(n^2)
    - best: O(n)
Space Complexity:
    - O(1)
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
void bubble_sort(vector<T> l) {
    // basic optimization to avoid unneeded checks
    // note that bubble_sort is the generic bad sorting algorithm
    int size = l.size();
    bool sorted_list = false;
    int j = 0;
    while (!sorted_list) {
        bool modified = false;
        for (int i = 0; i < (size - j); i++) {
            if (l[i-1] > l[i]) {
                T temp = l[i-1];
                l[i-1] = l[i];
                l[i] = temp;
                modified = true;
            }
        }
        if (!modified) {
            sorted_list = true;
            j += 1;
        }
    }
}

int main() {
    // Testing
    vector<int> l = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1};
    cout << "Unsorted list: ";
    print(l);
    bubble_sort(l);
    cout << "Sorted list: ";
    print(l);
    return 0;
}
