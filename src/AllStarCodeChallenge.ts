const func = (str: string, char: string) => {
  let count = 0;
  for(let ch of str){
    if(ch === char) count++;
  }
  return count;
};

console.log(func("Heollo", "o"));