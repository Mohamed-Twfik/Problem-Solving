"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectionSort = (arr) => {
    const length = arr.length;
    let temp;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++)
            if (arr[j] < arr[i])
                minIndex = j;
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
};
// console.log(selectionSort([4, 3, 7, 1, 8, 9]));
exports.default = selectionSort;
