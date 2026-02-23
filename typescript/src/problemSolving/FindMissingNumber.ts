const findMissingNumber = (arr: number[]) => {
  let obj: any = {};
  for (let i = 0; i < arr.length; i++){
    obj[arr[i]] = true
  }

  for (let i = 0; i < arr.length; i++){
    if(!obj[i]) return i
  }
  return arr.length;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // 0
const arr2 = [0, 1, 2, 3, 4, 6, 7, 8, 9];  // 5
const arr3 = [0, 1, 2, 3, 4, 5, 6, 8, 9];  // 7

console.log(findMissingNumber(arr1));
console.log(findMissingNumber(arr2));
console.log(findMissingNumber(arr3));