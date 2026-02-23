"use strict";
function timeConversion(s) {
    // Write your code here
    let details = s.split(":");
    let dur = details[2].slice(2);
    details[2] = details[2].slice(0, 2);
    if (dur === "AM") {
        if (details[0] === "12")
            details[0] = "00";
    }
    else {
        if (details[0] !== "12")
            details[0] = `${+details[0] + 12}`;
    }
    return details.join(":");
}
console.log(timeConversion("12:45:54PM"));
