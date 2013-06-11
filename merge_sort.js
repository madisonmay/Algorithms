function merge(left, right) {
    var result = [];
    while (left.length > 0 || right.length > 0) {
        if (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        } else if (left.length > 0) {
            result.push.apply(result, left);
            break;
        } else {
            result.push.apply(result, right);
            break;
        }
    }
    return result;
}

Array.prototype.merge_sort = function() {
    /*
    Merge Sort
    ----------
    Advantages:
        - Relatively fast for large data sets
        - Stable
    Disadvantages:
        - Not in-place
    Time complexity:
        - worst:   O(n*log(n))
        - average: O(n*log(n))
        - best:    O(n*log(n))
    Space complexity:
        - O(n)
    */
    if (this.length <= 1) {
        return this;
    } else {
        var pivot = this.length/2;
        var left = this.slice(0, pivot).merge_sort();
        var right = this.slice(pivot).merge_sort();
        return merge(left, right);
    }
}


//test cases
l = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Unsorted list: ', l);
l = l.merge_sort();
console.log('Sorted list: ', l);

