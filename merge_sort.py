def merge(left, right):
    result = [];
    while len(left) > 0 or len(right) > 0:
        if len(left) > 0 and len(right) > 0:
            if left[0] < right[0]:
                result.append(left.pop(0))
            else:
                result.append(right.pop(0))
        elif len(left) > 0:
            result.extend(left)
            break
        else:
            result.extend(right)
            break
    return result

def merge_sort(l):
    """
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
    """
    if len(l) <= 1:
        return l
    else:
        pivot = len(l)//2
        left = merge_sort(l[:pivot])
        right = merge_sort(l[pivot:])
        return merge(left, right)

if __name__ == '__main__':
    # test cases
    l = list(range(10, 0, -1))
    print('Unsorted list: ' + str(l));
    l = merge_sort(l)
    print('Sorted list: ' + str(l))

