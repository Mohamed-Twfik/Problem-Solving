import Stack from "../classes/LinkedStack";
import balancedParentheses from "./BalancedParentheses";

const operators: Record<string, number> = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "%": 2,
};

const operands = /^[0-9]$/;

const hasHigherPrecedence = (op1: string, op2: string) => operators[op1] >= operators[op2];

const isOperand = (op: string) => operands.test(op);

const isOperator = (op: string) => (operators[op]) ? true : false;

const isOpenBr = (op: string) => op === "(";

const isCloseBr = (op: string) => op === ")";

const infixToPostfix = (infix: string) => {
  const stack = new Stack<string>();
  let postfix = "";
  
  for (let ch of infix) {
    if (isOperator(ch)) {
      postfix += " ";
      while (!stack.isEmpty() && stack.getTop() !== "(" && hasHigherPrecedence(stack.getTop() as string, ch)) postfix += stack.pop() + " ";
      stack.push(ch);
    } else if (isOperand(ch)) postfix += ch;
    else if (isOpenBr(ch)) stack.push(ch);
    else if (isCloseBr(ch)) {
      while (!stack.isEmpty() && stack.getTop() !== "(") postfix += " " + stack.pop();
      stack.pop();
    }
  }
  while (!stack.isEmpty()) postfix += " " + stack.pop();
  return postfix;
};

const performOperation = (operand1: string, operand2: string, operation: string): string => {
  const op1 = +operand1;
  const op2 = +operand2;

  switch (operation) {
    case "+":
      return `${op1 + op2}`;
    
    case "-":
      return `${op1 - op2}`;
      
    case "*":
      return `${op1 * op2}`;
    
    case "/":
      return `${op1 / op2}`;
    
    case "%":
      return `${op1 % op2}`;
    
    default:
      return ``;
  }
};

const expressionEvaluation = (expression: string) => {
  if (!balancedParentheses(expression)) return "The expression is not balanced..!"; 
  const postfix = infixToPostfix(expression);
  let buffer = "";
  const stack = new Stack<string>();
  for (let ch of postfix) {
    if (isOperand(ch)) buffer += ch;
    else if (ch === " " && buffer !== "") {
      stack.push(buffer);
      buffer = "";
    }
    else if (isOperator(ch)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      if (!operand1 || !operand2) return "error in stack";
      stack.push(performOperation(operand1, operand2, ch));
      buffer = "";
    }
  }
  return stack.getTop();
};

console.log(expressionEvaluation("(44+11)*10/5*4+2"));