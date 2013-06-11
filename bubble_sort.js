// Bubble Sort:
// stable
// in-place
// Time Complexity:
//     - worst: O(n^2)
//     - average: O(n^2)
//     - best: O(n)
// Space Complexity:
//     - O(1)

Array.prototype.bubble_sort = function() {
    // basic optimization to avoid unneeded checks
    // note that bubble_sort is the generic bad sorting algorithm
    var size = this.length;
    var sorted_list = false;
    var j = 0;
    while (!sorted_list) {
        var modified = false;
        for (var i = 0; i < (size - j); i++) {
            if (this[i-1] > this[i]) {
                var temp = this[i-1];
                this[i-1] = this[i];
                this[i] = temp;
                modified = true;
            }
        }
        if (!modified) {
            sorted_list = true;
            j += 1;
        }
    }
}

// Test cases
var l = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Unsorted list: ', l);
l.bubble_sort();
console.log('Sorted list: ', l);
