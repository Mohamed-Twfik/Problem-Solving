import StackType from "../types/Stack";

export default class StackArray<T> extends StackType<T> {
  private top: number;
  private stack: T[];
  constructor() {
    super();
    this.top = -1;
    this.stack = [];
  }

  isEmpty() {
    return this.top === -1;
  }

  push(value: T) {
    this.top++;
    this.stack[this.top] = value;
  }

  pop() {
    if(this.top !== -1){
      const deletedElement = this.stack[this.top];
      this.top--;
      return deletedElement;
    } else {
      console.log("Stack is Empty");
      return null;
    };
  }

  getTop() {
    if(this.top === -1) return null
    else return this.stack[this.top];
  }

  getLength() {
    return this.top + 1;
  }

  display() {
    for (let i = this.top; i >= 0; i--) console.log(this.stack[i]);
  }
}

// const stack = new StackArray<number>();

// console.log(stack.isEmpty());
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack.pop());
// console.log(stack.getTop());
// stack.display();
