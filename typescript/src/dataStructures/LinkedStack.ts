import StackType from "../types/Stack";
import { LinkedNode } from "./Node";

export default class StackLinkedList<T> extends StackType<T> {
  private top: LinkedNode<T> | null;
  private length: number;

  constructor() {
    super();
    this.top = null
    this.length = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  getTop() {
    if (this.top === null) return null;
    else return this.top.getValue();
  }

  push(value: T) {
    const node = new LinkedNode<T>(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.setNext(this.top);
      this.top = node;
    }
    this.length++;
  }

  pop() {
    if (this.top === null) {
      return null
    } else {
      const deletedNode = this.top;
      this.top = this.top.getNext();
      this.length--;
      return deletedNode.getValue();
    }
  }

  getLength() {
    return this.length;
  }

  display() {
    let i = this.top;
    while (i !== null) {
      console.log(i.getValue())
      i = i.getNext();
    }
  }
}

// const stack = new StackLinkedList<number>();

// console.log(stack.isEmpty());
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack.pop());
// console.log(stack.getTop());
// stack.display();