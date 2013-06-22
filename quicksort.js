function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot_index = Math.floor((Math.random()*array.length));
    var pivot = array[pivot_index];
    array.splice(pivot_index, 1);
    var less = [];
    var greater = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return quicksort(less).concat([pivot]).concat(quicksort(greater));
}

//test cases
array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Unsorted list: ', array);
array = quicksort(array)
console.log('Sorted list: ', array);


