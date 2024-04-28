const catchMouse = (str: string, j: number)=>{
  str = str.replace(/[^CDm]/g, ".");
  const catPosition = str.indexOf("C");
  const dogPosition = str.indexOf("D");
  const mousePosition = str.indexOf("m");
  const cat_mouse_dis = Math.abs(catPosition-mousePosition);
  
  if(catPosition<0 || dogPosition<0 || mousePosition<0) return "boring without all three";
  else if(cat_mouse_dis > j) return "Escaped!";
  else if((dogPosition > catPosition && dogPosition < mousePosition) || ((dogPosition < catPosition && dogPosition > mousePosition))) return "Protected!";
  else return "Caught!";
};

console.log(catchMouse("abCghtjkmlllD", 5)); // Caught!
console.log(catchMouse("wqqwwqwqCklkvkcnkklsdmsssasdsdD", 5)); // Escaped!
console.log(catchMouse("abCghDjkmllll", 5)); // Protected!
console.log(catchMouse("abghjkllll", 5)); // boring without all three