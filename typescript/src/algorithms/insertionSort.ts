const insertionSort = (arr: number[]): number[] => {
  const length = arr.length;
  for (let i = 1; i < length; i++){
    let key = arr[i];
    let j = i - 1
    for (; j >= 0 && arr[j] > key; j--) arr[j + 1] = arr[j];
    
    arr[j + 1] = key;
  }
  return arr;
}

// console.log(insertionSort([2, 4, 6, 7, 8, 2, 1, 0]));
// console.log(insertionSort([1, 2, 3, 4, 5, 6, 7, 8]));

export default insertionSort;