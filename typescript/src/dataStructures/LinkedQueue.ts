import QueueType from "../types/Queue";
import { LinkedNode } from "./Node";

export default class LinkedQueue<T> extends QueueType<T> {
  private front: LinkedNode<T> | null;
  private rear: LinkedNode<T> | null;
  private length;

  constructor() {
    super();
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  push(value: T): void {
    const newNode = new LinkedNode<T>(value);
    if (this.isEmpty()) {
      this.rear = this.front = newNode;
    } else {
      this.rear?.setNext(newNode);
      this.rear = newNode;
    }
    this.length++;
  }

  pop(): T | null {
    if (!this.isEmpty()) {
      const deletedElement = this.front as LinkedNode<T>;
      this.front = (this.front as LinkedNode<T>).getNext();
      this.length--;
      return deletedElement.getValue();
    }
    else return null;
  }

  getFront(): T | null {
    return (this.isEmpty()) ? null : (this.front as LinkedNode<T>).getValue();
  }

  getRear(): T | null {
    return (this.isEmpty()) ? null : (this.rear as LinkedNode<T>).getValue();
  }

  getLength(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
  
  display(): void {
    let temp = this.front;
    while (temp !== null) {
      console.log(temp.getValue())
      temp = temp.getNext();
    }
  }
}


// const queue = new LinkedQueue<number>();
// queue.push(10);
// queue.push(20);
// queue.pop();
// queue.push(30);
// queue.push(40);
// queue.pop();
// queue.push(50);
// queue.push(60);
// queue.pop();
// queue.display();
