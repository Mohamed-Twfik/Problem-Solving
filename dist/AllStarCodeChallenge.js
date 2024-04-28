"use strict";
const func = (str, char) => {
    let count = 0;
    for (let ch of str) {
        if (ch === char)
            count++;
    }
    return count;
};
console.log(func("Heollo", "o"));
