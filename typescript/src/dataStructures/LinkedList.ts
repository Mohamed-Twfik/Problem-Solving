import { DoublyLinkedNode, LinkedNode } from "./Node";

abstract class LinkedListType<T>{
  abstract insertFirst(value: T): void;
  abstract insertLast(value: T): void;
  abstract insertAtIndex(index: number, value: T): void;

  abstract removeFirst(): T | null;
  abstract removeLast(): T | null;
  abstract removeAtIndex(index: number): T | null;
  abstract removeByValue(value: T): T | null;

  abstract getFirst(): T | null;
  abstract getLast(): T | null;
  abstract getAtIndex(index: number): T | null;
  abstract getLength(): number;

  abstract reverse(): void;
  abstract search(value: T): number | null;

  abstract isEmpty(): boolean;
  abstract display(): void;
}

export default class SinglyLinkedList<T> extends LinkedListType<T> {
  private first: LinkedNode<T> | null;
  private last: LinkedNode<T> | null;
  private length: number;

  constructor() {
    super();
    this.first = this.last = null;
    this.length = 0;
  }

  insertFirst(value: T): void {
    const node = new LinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      node.setNext(this.first);
      this.first = node;
    }
    this.length++;
  }

  insertLast(value: T): void {
    const node = new LinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      (this.last as LinkedNode<T>).setNext(node);
      this.last = node;
    }
    this.length++;
  }

  insertAtIndex(index: number, value: T): void {
    if (index < 0 || index > this.length) console.log("Out of Range...");
    else if (index === 0) this.insertFirst(value);
    else if (index === this.length) this.insertLast(value);
    else {
      let temp = (this.first as LinkedNode<T>).getNext();
      for (let i = 1; i < index - 1; i++) {
        temp = (temp as LinkedNode<T>).getNext();
      }
      const node = new LinkedNode<T>(value);
      node.setNext((temp as LinkedNode<T>).getNext());
      (temp as LinkedNode<T>).setNext(node);
      this.length++;
    }
  }

  removeFirst(): T | null {
    if (this.isEmpty()) return null;

    const firstNode = this.first;

    if (this.length === 1) {
      this.first = this.last = null;
    } else {
      this.first = (this.first as LinkedNode<T>).getNext();
    }

    this.length--;
    return (firstNode as LinkedNode<T>).getValue();
  }

  removeLast(): T | null {
    if (this.isEmpty()) return null;

    const lastNode = this.last;

    if (this.length === 1) {
      this.first = this.last = null;
    } else {
      let prev = this.first;
      let temp = (this.first as LinkedNode<T>).getNext();
      while ((temp as LinkedNode<T>).getNext() !== null) {
        prev = temp;
        temp = (temp as LinkedNode<T>).getNext();
      }
      (prev as LinkedNode<T>).setNext(null);
      this.last = prev;
    }
    this.length--;
    return (lastNode as LinkedNode<T>).getValue();
  }

  removeAtIndex(index: number): T | null {
    if (this.isEmpty()) return null;
    
    if (index < 0 || index > this.length - 1) return null;
    else if (index === 0) return this.removeFirst();
    else if (index === this.length - 1) return this.removeLast();
    else {
      let temp = (this.first as LinkedNode<T>).getNext();
      for (let i = 1; i < index - 1; i++){
        temp = (temp as LinkedNode<T>).getNext();
      }
      let deletedNode = (temp as LinkedNode<T>).getNext() as LinkedNode<T>;
      (temp as LinkedNode<T>).setNext(((temp as LinkedNode<T>).getNext() as LinkedNode<T>).getNext())
      this.length--;
      return deletedNode.getValue();
    }
  }

  removeByValue(value: T): T | null {
    let deletedNode;
    if ((this.first as LinkedNode<T>).getValue() === value) {
      deletedNode = this.removeFirst();
      return deletedNode;
    }
    let prev = this.first;
    let temp = (this.first as LinkedNode<T>).getNext();
    while (temp != null) {
      if (temp.getValue() === value) {
        (prev as LinkedNode<T>).setNext(temp.getNext());
        this.length--;
        if (temp.getNext() === null) this.last = prev;
        this.length--;
        return temp.getValue();
      } else {
        prev = temp;
        temp = temp.getNext();
      }
    }
    console.log("Not Found!");
    return null;
  }

  getFirst(): T | null {
    return (this.isEmpty()) ? null : (this.first as LinkedNode<T>).getValue();
  }

  getLast(): T | null {
    return (this.isEmpty()) ? null : (this.last as LinkedNode<T>).getValue();
  }

  getAtIndex(index: number): T | null {
    if (this.isEmpty()) return null;
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.getFirst();
    else if (index === this.length) return this.getLast();
    else {
      let temp = (this.first as LinkedNode<T>).getNext();
      for (let i = 1; i < index; i++){
        temp = (temp as LinkedNode<T>).getNext();
      }
      return (temp as LinkedNode<T>).getValue();
    }
  }

  getLength(): number {
    return this.length;
  }

  reverse(): void {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let prev = null;
      let curr = this.first;
      this.last = this.first;
      let next = (this.first as LinkedNode<T>).getNext();
      while (next !== null) {
        (curr as LinkedNode<T>).setNext(prev);
        prev = curr;
        curr = next;
        next = (next as LinkedNode<T>).getNext();
      }
      (curr as LinkedNode<T>).setNext(prev);
      this.first = curr;
    }
  }

  search(value: T): number | null {
    let temp = this.first;
    let index: number = 0;
    while (temp !== null) {
      if (temp.getValue() === value) {
        return index;
      }
      temp = temp.getNext();
      index++;
    }
    return null;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  display(): void {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.getValue());
      temp = temp.getNext();
    }
  }
}



export class DoublyLinkedList<T> extends LinkedListType<T>{
  private first: DoublyLinkedNode<T> | null;
  private last: DoublyLinkedNode<T> | null;
  private length: number;

  constructor() {
    super();
    this.first = this.last = null;
    this.length = 0;
  }

  insertFirst(value: T): void {
    const node = new DoublyLinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      (this.first as DoublyLinkedNode<T>).setPrevious(node);
      node.setNext(this.first);
      this.first = node;
    }
    this.length++;
  }

  insertLast(value: T): void {
    const node = new DoublyLinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      (this.last as DoublyLinkedNode<T>).setNext(node);
      node.setPrevious(this.last);
      this.last = node;
    }
    this.length++;
  }

  insertAtIndex(index: number, value: T): void {
    if (index < 0 || index > this.length) console.log("Out of Range...");
    else if (index === 0) this.insertFirst(value);
    else if (index === this.length) this.insertLast(value);
    else {
      let temp;
      if (index < this.length / 2) {
        temp = (this.first as DoublyLinkedNode<T>).getNext();
        for (let i = 1; i < index; i++) {
          temp = (temp as DoublyLinkedNode<T>).getNext();
        }
      } else {
        temp = this.last;
        for (let i = this.length-1; i > index; i--) {
          temp = (temp as DoublyLinkedNode<T>).getPrevious();
        }
      }
      const node = new DoublyLinkedNode<T>(value);
      node.setNext(temp);
      ((temp as DoublyLinkedNode<T>).getPrevious() as DoublyLinkedNode<T>).setNext(node);
      node.setPrevious((temp as DoublyLinkedNode<T>).getPrevious());
      (temp as DoublyLinkedNode<T>).setPrevious(node);
      this.length++;
    }
  }

  removeFirst(): T | null {
    if (this.isEmpty()) return null;

    const firstNode = this.first;

    if (this.length === 1) {
      this.first = this.last = null;
    } else {
      this.first = (this.first as DoublyLinkedNode<T>).getNext();
      (this.first as DoublyLinkedNode<T>).setPrevious(null);
    }

    this.length--;
    return (firstNode as DoublyLinkedNode<T>).getValue();
  }
  
  removeLast(): T | null {
    if (this.isEmpty()) return null;

    const lastNode = this.last;

    if (this.length === 1) {
      this.first = this.last = null;
    } else {
      this.last = (this.last as DoublyLinkedNode<T>).getPrevious();
      (this.last as DoublyLinkedNode<T>).setNext(null);
    }

    this.length--;
    return (lastNode as DoublyLinkedNode<T>).getValue();
  }

  removeAtIndex(index: number): T | null {
    if (this.isEmpty()) return null;

    if (index < 0 || index > this.length) return null;
    else if (index === 0) return this.removeFirst();
    else if (index === this.length - 1) return this.removeLast();
    else {
      let temp;
      if (index < this.length / 2) {
        temp = (this.first as DoublyLinkedNode<T>).getNext();
        for (let i = 1; i < index; i++) {
          temp = (temp as DoublyLinkedNode<T>).getNext();
        }
      } else {
        temp = (this.last as DoublyLinkedNode<T>).getPrevious();
        for (let i = this.length-2; i > index; i--) {
          temp = (temp as DoublyLinkedNode<T>).getPrevious();
        }
      }
      ((temp as DoublyLinkedNode<T>).getPrevious() as DoublyLinkedNode<T>).setNext((temp as DoublyLinkedNode<T>).getNext());
      ((temp as DoublyLinkedNode<T>).getNext() as DoublyLinkedNode<T>).setPrevious((temp as DoublyLinkedNode<T>).getPrevious());
      this.length--;
      return (temp as DoublyLinkedNode<T>).getValue();
    }
  }

  removeByValue(value: T): T | null {
    let deletedNode;
    if ((this.first as DoublyLinkedNode<T>).getValue() === value) {
      deletedNode = this.removeFirst();
      return deletedNode;
    }
    if ((this.last as DoublyLinkedNode<T>).getValue() === value) {
      deletedNode = this.removeLast();
      return deletedNode;
    }

    // let prev = this.first;
    let temp = (this.first as DoublyLinkedNode<T>).getNext();
    while (temp != null) {
      if (temp.getValue() === value) {
        ((temp as DoublyLinkedNode<T>).getPrevious() as DoublyLinkedNode<T>).setNext((temp as DoublyLinkedNode<T>).getNext());
        ((temp as DoublyLinkedNode<T>).getNext() as DoublyLinkedNode<T>).setPrevious((temp as DoublyLinkedNode<T>).getPrevious());
        this.length--;
        return temp.getValue();
      } else temp = temp.getNext();
    }
    console.log("Not Found!");
    return null;
  }

  getFirst(): T | null {
    return (this.isEmpty()) ? null : (this.first as DoublyLinkedNode<T>).getValue();
  }

  getLast(): T | null {
    return (this.isEmpty()) ? null : (this.last as DoublyLinkedNode<T>).getValue();
  }

  getAtIndex(index: number): T | null {
    if (this.isEmpty()) return null;

    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.getFirst();
    else if (index === this.length) return this.getLast();
    else {
      let temp;
      if (index < this.length / 2) {
        temp = (this.first as DoublyLinkedNode<T>).getNext();
        for (let i = 1; i < index; i++) {
          temp = (temp as DoublyLinkedNode<T>).getNext();
        }
      } else {
        temp = (this.last as DoublyLinkedNode<T>).getPrevious();
        for (let i = this.length-2; i < index; i++) {
          temp = (temp as DoublyLinkedNode<T>).getPrevious();
        }
      }
      return (temp as DoublyLinkedNode<T>).getValue();
    }
  }

  getLength(): number {
    return this.length;
  }

  reverse(): void {
    if (this.isEmpty()) console.log("List is Empty");
    else {
      let curr = this.first;
      this.first = this.last;
      this.last = curr;
      let temp;
      while (curr !== null) {
        temp = new DoublyLinkedNode<T>(curr.getValue());
        temp.setNext(curr.getNext());
        temp.setPrevious(curr.getPrevious());

        curr.setNext(temp.getPrevious())
        curr.setPrevious(temp.getNext());
        curr = curr.getPrevious();
      }
    }
  }

  search(value: T): number | null {
    let temp = this.first;
    let index: number = 0;
    while (temp !== null) {
      if (temp.getValue() === value) {
        return index;
      }
      temp = temp.getNext();
      index++;
    }
    return null;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  display(): void {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.getValue());
      temp = temp.getNext();
    }
  }
  
}


// const linkedList = new DoublyLinkedList<number>();

// linkedList.insertFirst(1);
// linkedList.insertLast(3);
// linkedList.insertFirst(0);
// linkedList.insertAtIndex(2, 2);


// console.log("-------------------------------------------------");
// console.log("------------------ The Length -------------------");
// console.log("-------------------------------------------------");
// console.log(linkedList.getLength());

// console.log("\n-------------------------------------------------");
// console.log("--------------- The First Element ---------------");
// console.log("-------------------------------------------------");
// console.log(linkedList.getFirst());

// console.log("\n-------------------------------------------------");
// console.log("--------------- The Last Element ----------------");
// console.log("-------------------------------------------------");
// console.log(linkedList.getLast());

// console.log("\n-------------------------------------------------");
// console.log("------------ The Element At Index 2 -------------");
// console.log("-------------------------------------------------");
// console.log(linkedList.getAtIndex(2));

// console.log("\n------------------------------------------------");
// console.log("----------- All Elements After Insert -----------");
// console.log("-------------------------------------------------");
// linkedList.display();

// console.log("\n-------------------------------------------------");
// console.log("---------- All Elements After Reverse -----------");
// console.log("-------------------------------------------------");
// linkedList.reverse();
// linkedList.display();

// console.log("\n-------------------------------------------------");
// console.log("--------------- Index Of Value 2 ----------------");
// console.log("-------------------------------------------------");
// console.log(linkedList.search(2));

// console.log("\n-------------------------------------------------");
// console.log("-------- All Elements After Remove First --------");
// console.log("-------------------------------------------------");
// linkedList.removeFirst();
// linkedList.display();

// console.log("\n-------------------------------------------------");
// console.log("--------- All Elements After Remove Last --------");
// console.log("-------------------------------------------------");
// linkedList.removeLast();
// linkedList.display();

// console.log("\n-------------------------------------------------");
// console.log("------ All Elements After Remove At Index 1 -----");
// console.log("-------------------------------------------------");
// linkedList.removeAtIndex(1);
// linkedList.display();

// console.log("\n-------------------------------------------------");
// console.log("-------- All Elements After Remove Value 1 ------");
// console.log("-------------------------------------------------");
// linkedList.removeByValue(1);
// linkedList.display();