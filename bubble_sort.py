def bubble_sort(l):
    size = len(l)
    sorted_list = False;
    while not sorted_list:
        modified = False;
        for i in range(1, size):
            if l[i-1] > l[i]:
                modified = True;
                l[i], l[i-1] = l[i-1], l[i]
        if modified: sorted_list = True

if __name__ == '__main__':
    # test cases
    l = list(range(10, 0, -1))
    print('Unsorted list: ' + str(l));
    bubble_sort(l)
    print('Sorted list: ' + str(l))
