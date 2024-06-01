import StackLinkedList from "../classes/LinkedStack";

const balancedParentheses = (s: string) => {
  const stack = new StackLinkedList<string>();
  const pairs: Record<string, string> = {
    "}": "{",
    ")": "(",
    "]": "["
  }
  for (let i = 0; i < s.length; i++){
    const ch = s[i];
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else if(ch === ")" || ch === "}" || ch === "]") {
      if (stack.isEmpty() || pairs[ch] !== stack.getTop()) return false;
      stack.pop();
    }
  }

  if (stack.isEmpty()) return true;
  return false;
}

export default balancedParentheses;


// console.log(balancedParentheses(""));               //true
// console.log(balancedParentheses("(2+1))"));         //false
// console.log(balancedParentheses("(1-2)"));          //true
// console.log(balancedParentheses("3*(5+{4-2})"));    //true
// console.log(balancedParentheses("5+(4+3)[7*9"));    //false
// console.log(balancedParentheses(")5+2("));          //false
// console.log(balancedParentheses("9/(6+4)*[4-6]"));  //true
// console.log(balancedParentheses("[8-5])(]"));       //false