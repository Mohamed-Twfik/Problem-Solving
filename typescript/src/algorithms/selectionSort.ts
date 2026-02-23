const selectionSort = (arr: number[]): number[] => {
  const length = arr.length;
  let temp: number;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) if (arr[j] < arr[i]) minIndex = j;
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

// console.log(selectionSort([4, 3, 7, 1, 8, 9]));

export default selectionSort;