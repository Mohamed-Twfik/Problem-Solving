const compareVersions = (version1: string, version2: string)=>{
  let v1 = version1.split(".");
  let v2 = version2.split(".");

  let less = false;
  const maxLength = Math.max(v1.length, v2.length)
  for(let j = 0; j < maxLength; j++){
    let ver1 = parseInt(v1[j]) || 0;
    let ver2 = parseInt(v2[j]) || 0;
    if(ver1 === ver2) continue;
    else if(ver1 > ver2) return true;
    else return false
  }
  return true;
};

console.log(compareVersions("11", "10"));                    // returns true
console.log(compareVersions("11", "11"));                    // returns true
console.log(compareVersions("10.4.6", "10.4"));              // returns true
console.log(compareVersions("10.4", "11"));                  // returns false
console.log(compareVersions("10.4", "10.10"));               // returns false
console.log(compareVersions("10.4.9", "10.5"));              // returns false
