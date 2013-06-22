from random import randint, shuffle
import timeit

def quicksort(array):
    if len(array) <= 1:
        return array
    pivot_index = randint(0, len(array)-1)
    pivot = array.pop(pivot_index)
    less, greater = [], []
    for element in array:
        if element <= pivot:
            less.append(element)
        else:
            greater.append(element)
    return quicksort(less) + [pivot] + quicksort(greater)

if __name__ == '__main__':
    #test cases
    array = list(range(10, 0, -1))
    shuffle(array)
    print('Unsorted list: ' + str(array));
    array = quicksort(array)
    print('Sorted list: ' + str(array))


