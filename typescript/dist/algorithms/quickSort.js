"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partitioning1 = (arr, low, high) => {
    const swap = (a, b) => { [arr[a], arr[b]] = [arr[b], arr[a]]; };
    let p = Math.floor((high + low) / 2);
    while (true) {
        while (arr[p] <= arr[high] && p != high)
            high--;
        if (p === high)
            break;
        else if (arr[p] > arr[high]) {
            swap(p, high);
            p = high;
        }
        while (arr[p] >= arr[low] && p != low)
            low++;
        if (p === low)
            break;
        else if (arr[p] < arr[low]) {
            swap(p, low);
            p = low;
        }
    }
    return p;
};
const quickSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        const piv = partitioning1(arr, low, high);
        quickSort(arr, low, piv - 1);
        quickSort(arr, piv + 1, high);
    }
};
// const arr = [10, 24, 76, 73, 72, 1, 9, 8];
// quickSort(arr);
// console.log(arr) // [1, 9, 10, 24, 72, 73, 76]
exports.default = quickSort;
