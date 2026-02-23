import { DoublyNodeType, NodeType } from "../types/Node";

export class LinkedNode<T> extends NodeType<T> {
  private value: T;
  private next: LinkedNode<T> | null;

  constructor(value: T) {
    super();
    this.value = value;
    this.next = null;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }

  setNext(next: LinkedNode<T> | null) {
    this.next = next;
  }

  setValue(value: T): void {
    this.value = value
  }
}

export class DoublyLinkedNode<T> extends DoublyNodeType<T> {
  private value: T;
  private next: DoublyLinkedNode<T> | null;
  private previous: DoublyLinkedNode<T> | null;

  constructor(value: T) {
    super();
    this.value = value;
    this.next = null;
    this.previous = null;
  }
  
  getNext() {
    return this.next;
  }

  getPrevious() {
    return this.previous;
  }

  getValue() {
    return this.value;
  }

  setNext(next: DoublyLinkedNode<T> | null) {
    this.next = next;
  }

  setPrevious(previous: DoublyLinkedNode<T> | null): void {
    this.previous = previous
  }

  setValue(value: T): void {
    this.value = value
  }
}