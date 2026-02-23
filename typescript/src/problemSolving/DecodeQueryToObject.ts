// Converts a URL Query String into an object map
const test = (parent: any, arr: string[]) => {
  let obj: any = {};
  let parentObj = (parent && parent[arr[0]]) ? parent[arr[0]] : {};
  if (arr.length < 3) obj[arr[0]] = decodeURIComponent(arr[1]);
  else obj[arr[0]] = {...parentObj, ...test(parentObj[arr[0]], arr.slice(1))};
  return obj;
}
function convertQueryToMap(query: string) {
  let obj: any = {};
  if (!query) return obj;
  let arr = query.split("&");
  arr.forEach(e=>{
    let key_values = e.split(/[.=]/);
    if (key_values.length == 2) obj[key_values[0]] = decodeURIComponent(key_values[1]);
    else obj[key_values[0]] = { ...obj[key_values[0]], ...test(obj[key_values[0]], key_values.slice(1)) };
  })
  return obj;
}

console.log(convertQueryToMap("user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"));

console.log(convertQueryToMap(""));
console.log(convertQueryToMap("a=1&b=2"));
console.log(convertQueryToMap("a=1%202"));
console.log(convertQueryToMap("user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie"));
