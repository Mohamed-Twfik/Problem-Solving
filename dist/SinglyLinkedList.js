"use strict";
class NodeClass {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.size = 0;
        this.linkedListHead = null;
    }
    get(index) {
        // implementation goes here
        let currentNode = this.linkedListHead;
        for (let i = 0; i < this.size; i++) {
            if (i === index) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
    }
    set(index, value) {
        // implementation goes here
        let currentNode = this.linkedListHead;
        for (let i = 0; i < this.size; i++) {
            if (i === index) {
                currentNode.value = value;
            }
            currentNode = currentNode.next;
        }
    }
    pushfront(value) {
        // implementation goes here
        const newNode = new NodeClass(value);
        newNode.next = this.linkedListHead;
        this.size++;
        this.linkedListHead = newNode;
    }
    popfront() {
        // implementation goes here
        const currentNode = this.linkedListHead;
        this.linkedListHead = currentNode.next;
        this.size--;
        return currentNode.value;
    }
    pushback(value) {
        // implementation goes here
        const newNode = new NodeClass(value);
        let currentNode = this.linkedListHead;
        for (let i = 0; i < this.size; i++) {
            if (i === this.size - 1) {
                currentNode.next = newNode;
                this.size++;
                return;
            }
            currentNode = currentNode.next;
        }
    }
    popback() {
        // implementation goes here
        let currentNode = this.linkedListHead;
        for (let i = 0; i < this.size; i++) {
            if (i === this.size - 2) {
                const lastNode = currentNode.next;
                currentNode.next = null;
                this.size--;
                return lastNode.value;
            }
            currentNode = currentNode.next;
        }
    }
    insert(index, value) {
        // implementation goes here
        const newNode = new NodeClass(value);
        let currentNode = this.linkedListHead;
        for (let i = 0; i < this.size; i++) {
            if (i === index - 1) {
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                this.size++;
                return;
            }
            currentNode = currentNode.next;
        }
    }
    remove(index) {
        // implementation goes here
        let currentNode = this.linkedListHead;
        for (let i = 0; i < this.size; i++) {
            if (i === index - 1) {
                const nodeToRemove = currentNode.next;
                currentNode.next = nodeToRemove.next;
                this.size--;
                return nodeToRemove.value;
            }
            currentNode = currentNode.next;
        }
    }
    getSize() {
        // implementation goes here
        return this.size;
    }
    isEmpty() {
        // implementation goes here
        return this.size === 0;
    }
}
