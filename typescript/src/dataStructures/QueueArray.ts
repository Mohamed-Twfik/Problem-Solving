import QueueType from "../types/Queue";

export default class QueueArray<T> extends QueueType<T> {
  private Queue: T[];
  private rear: number;
  private front: number;
  private length: number;
  private maxSize: number;

  constructor(maxSize: number) {
    super();
    this.Queue = [];
    this.front = 0;
    this.length = 0;
    if(maxSize <= 0) this.maxSize = 10;
    else this.maxSize = maxSize;
    this.rear = maxSize - 1;
  }
  
  push(value: T): void {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.maxSize;
      this.Queue[this.rear] = value;
      this.length++;
    } else console.log("Queue is Full");
  }

  pop(): T | null {
    if (!this.isEmpty()) {
      const deletedElement = this.Queue[this.front];
      this.front = (this.front + 1) % this.maxSize;
      this.length--;
      return deletedElement;
    } else {
      console.log("Queue is Empty");
      return null;
    }
  }

  getFront(): T | null {
    if (this.isEmpty()) {
      console.log("Queue is Empty")
      return null;
    }
    return this.Queue[this.front];
  }

  getRear(): T | null {
    if (this.isEmpty()) {
      console.log("Queue is Empty")
      return null;
    }
    return this.Queue[this.rear];
  }

  getLength(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.maxSize;
  }

  display(): void {
    for (let i = this.front; i !== this.rear;) {
      console.log(this.Queue[i])
      i = (i + 1) % this.maxSize;
    }
    console.log(this.Queue[this.rear]);
  }
}


// const queue = new QueueArray<number>(3);
// queue.push(10);
// queue.push(20);
// queue.pop();
// queue.push(30);
// queue.push(40);
// queue.pop();
// queue.push(50);
// queue.pop();
// queue.push(60);
// queue.display();