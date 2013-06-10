/*
Sorts list l using insertion sort.
Requires that elements in list can be compared
using the < operator.
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
    best: O(n)
    average: O(n^2)
    worst: O(n^2)
Space Complexity:
    O(n)
*/

Array.prototype.insertion_sort = function() {
    size = this.length;
    for (var i = 1; i < size; i++) {
        for (var j = i; j > 0; j--) {
            // iterate in reverse until element this[j] >= this[j-1]
            if (this[j] < this[j-1]) {
                // if elements are out of order,
                // swap them using a temporary variable
                var temp = this[j-1];
                this[j-1] = this[j];
                this[j] = temp;
            } else {
                break
            }
        }
    }
}

// Testing
var l = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log("Unsorted list: ", l);
l.insertion_sort();
console.log("Sorted list: ", l);