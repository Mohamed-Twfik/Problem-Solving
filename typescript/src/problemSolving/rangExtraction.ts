/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
# returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
Courtesy of rosettacode.org
*/

function find_range_end(numbers: number[], start: number): number | null {    
    let end = start;

    while (
        end + 1 < numbers.length
        && numbers[end + 1] == numbers[end] + 1
    ) end += 1;

    if (end - start >= 2) return end;  // valid range
    return null;
}

function save_result(result: string[], args: number[], start: number, end: number | null): string[] {
    let element = ""
    if (end === null) element = `${args[start]}`;
    else element = `${args[start]}-${args[end]}`;
    result.push(element);
    return result;
}

function solution(args: number[]): string {
    let result: string[] = [];
    let start = 0;
    while (start < args.length) {
        let end = find_range_end(args, start);
        result = save_result(result, args, start, end);
        start = end !== null ? end + 1 : start + 1;
    }
    return result.join(",");
}
            
            


console.log("1. ", "-10--8" == solution([-10, -9, -8]))

console.log("2. ", "-10--8,1,2,11,15-17" == solution([-10, -9, -8, 1, 2, 11, 15, 16, 17]))

console.log("3. ", "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" == solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

console.log("4. ", "-6,-3-1,3-5,7-11,14,15,17-20" == solution([-6,-3,-2,-1,0,1,3,4,5,7,8,9,10,11,14,15,17,18,19,20]))