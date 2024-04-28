interface ISinglyLinkedList {
  get(index: number): any;
  set(index: number, value: any): void;
  pushfront(value: any): void;
  popfront(): any;
  pushback(value: any): void;
  popback(): any;
  insert(index: number, value: any): void;
  remove(index: number): void;
  getSize(): number;
  isEmpty(): boolean;
}

class NodeClass {
  value: any;
  next: NodeClass | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList implements ISinglyLinkedList{
  private size: number;
  private linkedListHead: NodeClass | null;
  
  constructor(){
    this.size = 0;
    this.linkedListHead = null;
  }

  get(index: number): any {
    // implementation goes here
    let currentNode = this.linkedListHead as NodeClass;
    for(let i = 0; i<this.size; i++){
      if(i === index){
        return currentNode.value;
      }
      currentNode = currentNode.next as NodeClass;
    }
  }

  set(index: number, value: any): void {
    // implementation goes here
    let currentNode = this.linkedListHead as NodeClass;
    for(let i = 0; i<this.size; i++){
      if(i === index){
        currentNode.value = value;
      }
      currentNode = currentNode.next as NodeClass;
    }
  }

  pushfront(value: any): void {
    // implementation goes here
    const newNode = new NodeClass(value);
    newNode.next = this.linkedListHead;
    this.size++;
    this.linkedListHead = newNode;
  }

  popfront(): any {
    // implementation goes here
    const currentNode = this.linkedListHead as NodeClass;
    this.linkedListHead = currentNode.next;
    this.size--;
    return currentNode.value;
  }

  pushback(value: any): void {
    // implementation goes here
    const newNode = new NodeClass(value);
    let currentNode = this.linkedListHead as NodeClass;
    for(let i = 0; i<this.size; i++){
      if(i === this.size - 1){
        currentNode.next = newNode;
        this.size++;
        return;
      }
      currentNode = currentNode.next as NodeClass;
    }
  }

  popback(): any {
    // implementation goes here
    let currentNode = this.linkedListHead as NodeClass;
    for(let i = 0; i<this.size; i++){
      if(i === this.size - 2){
        const lastNode = currentNode.next as NodeClass;
        currentNode.next = null;
        this.size--;
        return lastNode.value;
      }
      currentNode = currentNode.next as NodeClass;
    }
  }

  insert(index: number, value: any): void {
    // implementation goes here
    const newNode = new NodeClass(value);
    let currentNode = this.linkedListHead as NodeClass;
    for(let i = 0; i<this.size; i++){
      if(i === index - 1){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
        return;
      }
      currentNode = currentNode.next as NodeClass;
    }
  }

  remove(index: number): any {
    // implementation goes here
    let currentNode = this.linkedListHead as NodeClass;
    for(let i = 0; i<this.size; i++){
      if(i === index - 1){
        const nodeToRemove = currentNode.next as NodeClass;
        currentNode.next = nodeToRemove.next;
        this.size--;
        return nodeToRemove.value;
      }
      currentNode = currentNode.next as NodeClass;
    }
  }

  getSize(): number {
    // implementation goes here
    return this.size;
  }

  isEmpty(): boolean {
    // implementation goes here
    return this.size === 0;
  }
}