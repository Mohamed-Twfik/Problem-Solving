function miniMaxSum(arr: number[]): void {
    let min = Infinity;
    let max = 0;
    arr.forEach((e, index)=>{
        let sum = arr.reduce((p, c, i)=>{
            if(i !== index) return p+c;
            return p
        }, 0);
        if(sum > max) max = sum;
        if (sum < min) min = sum;
    })
    console.log(min + " " + max);
}


miniMaxSum([5, 5, 5, 5, 5]);