"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linearSearch = (arr, val) => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === val)
            return i;
    return -1;
};
// const array = [1, 3, 5, 3, 2, 5, 7, 0, 12, 43, 64];
// console.log(linearSearch(array, 10)); // -1
// console.log(linearSearch(array, 0)); // 7
// console.log(linearSearch(array, 43)); // 9
// console.log(linearSearch(array, 3)); // 1
exports.default = linearSearch;
