"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch = (val, arr, start = 0, end = arr.length - 1) => {
    const mid = Math.floor((start + end) / 2);
    if (start >= end && arr[mid] !== val)
        return -1;
    else if (arr[mid] > val)
        return binarySearch(val, arr, 0, mid - 1);
    else if (arr[mid] < val)
        return binarySearch(val, arr, mid + 1, end);
    else
        return mid;
};
console.log(binarySearch(45, [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 25, 42, 545, 989])); // 12
exports.default = binarySearch;
