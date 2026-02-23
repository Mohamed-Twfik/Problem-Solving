const heapify = (arr: number[], size: number, index: number) => {
  let leftIndex = (index * 2) + 1;
  let rightIndex = (index * 2) + 2;
  let max = index;
  if (leftIndex < size && arr[leftIndex] > arr[max]) max = leftIndex;
  if (rightIndex < size && arr[rightIndex] > arr[max]) max = rightIndex;
  if (max != index) {
    let temp = arr[index];
    arr[index] = arr[max];
    arr[max] = temp;
    heapify(arr, size, max);
  }
};

const heapSort = (arr: number[]) => {
  const size = arr.length;
  for (let i = (size / 2) - 1; i >= 0; i--) heapify(arr, size, i);
  for (let i = size - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
};

const arr = [90, 10, 40, 70, 5];
heapSort(arr);
console.log(arr);

export default heapSort;