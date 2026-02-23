const bubbleSort = (arr: number[]): number[] => {
  const length = arr.length;
  let temp: number;
  let check: boolean = false;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++){
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        check = true;
      }
    }
    if (!check) break;
  }
  return arr;
}

// console.log(bubbleSort([2, 4, 6, 7, 8, 2, 1, 0]));
// console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8]));

export default bubbleSort;