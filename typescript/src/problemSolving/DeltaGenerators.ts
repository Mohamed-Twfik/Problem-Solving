function* deltaGenerators(arr: Iterable<any>, level: number): Iterable<any>  {
  if(level === 0){
    for (const value of arr) {
      yield value;
    }
    return;
  }
  
  let diff = deltaGenerators(arr, level-1)

  // let result = [];
  for(let i = 0; i < (diff as Array<number>).length-1; i++){
    yield (arr as Array<number>)[i+1]-(arr as Array<number>)[i];
  }
  // arr = result;
  // return result;
}

console.log(deltaGenerators([1, 2, 4, 7, 11, 16, 22], 1));  // [1, 2, 3, 4, 5, 6]
console.log(deltaGenerators([1, 2, 4, 7, 11, 16, 22], 2));  // [1, 1, 1, 1, 1]
console.log(deltaGenerators([1, 2, 4, 7, 11, 16, 22], 3));  // [0, 0, 0, 0]
