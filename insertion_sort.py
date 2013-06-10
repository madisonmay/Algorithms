def insertion_sort(l):
    """Sorts list l using insertion sort.
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
    """

    size = len(l)
    for i in range(1, size):
        for j in range(i, 0, -1):
            # iterate in reverse until element l[j] >= l[j-1]
            if l[j] < l[j-1]:
                # if elements are out of order, swap them
                l[j-1], l[j] = l[j], l[j-1]
            else:
                break

if __name__ == '__main__':
    # test cases
    l = list(range(10, 0, -1))
    print('Unsorted list: ' + str(l));
    insertion_sort(l)
    print('Sorted list: ' + str(l))


