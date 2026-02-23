"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
const Node_1 = require("./Node");
class LinkedListType {
}
class SinglyLinkedList extends LinkedListType {
    constructor() {
        super();
        this.first = this.last = null;
        this.length = 0;
    }
    insertFirst(value) {
        const node = new Node_1.LinkedNode(value);
        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            node.setNext(this.first);
            this.first = node;
        }
        this.length++;
    }
    insertLast(value) {
        const node = new Node_1.LinkedNode(value);
        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            this.last.setNext(node);
            this.last = node;
        }
        this.length++;
    }
    insertAtIndex(index, value) {
        if (index < 0 || index > this.length)
            console.log("Out of Range...");
        else if (index === 0)
            this.insertFirst(value);
        else if (index === this.length)
            this.insertLast(value);
        else {
            let temp = this.first.getNext();
            for (let i = 1; i < index - 1; i++) {
                temp = temp.getNext();
            }
            const node = new Node_1.LinkedNode(value);
            node.setNext(temp.getNext());
            temp.setNext(node);
            this.length++;
        }
    }
    removeFirst() {
        if (this.isEmpty())
            return null;
        const firstNode = this.first;
        if (this.length === 1) {
            this.first = this.last = null;
        }
        else {
            this.first = this.first.getNext();
        }
        this.length--;
        return firstNode.getValue();
    }
    removeLast() {
        if (this.isEmpty())
            return null;
        const lastNode = this.last;
        if (this.length === 1) {
            this.first = this.last = null;
        }
        else {
            let prev = this.first;
            let temp = this.first.getNext();
            while (temp.getNext() !== null) {
                prev = temp;
                temp = temp.getNext();
            }
            prev.setNext(null);
            this.last = prev;
        }
        this.length--;
        return lastNode.getValue();
    }
    removeAtIndex(index) {
        if (this.isEmpty())
            return null;
        if (index < 0 || index > this.length - 1)
            return null;
        else if (index === 0)
            return this.removeFirst();
        else if (index === this.length - 1)
            return this.removeLast();
        else {
            let temp = this.first.getNext();
            for (let i = 1; i < index - 1; i++) {
                temp = temp.getNext();
            }
            let deletedNode = temp.getNext();
            temp.setNext(temp.getNext().getNext());
            this.length--;
            return deletedNode.getValue();
        }
    }
    removeByValue(value) {
        let deletedNode;
        if (this.first.getValue() === value) {
            deletedNode = this.removeFirst();
            return deletedNode;
        }
        let prev = this.first;
        let temp = this.first.getNext();
        while (temp != null) {
            if (temp.getValue() === value) {
                prev.setNext(temp.getNext());
                this.length--;
                if (temp.getNext() === null)
                    this.last = prev;
                this.length--;
                return temp.getValue();
            }
            else {
                prev = temp;
                temp = temp.getNext();
            }
        }
        console.log("Not Found!");
        return null;
    }
    getFirst() {
        return (this.isEmpty()) ? null : this.first.getValue();
    }
    getLast() {
        return (this.isEmpty()) ? null : this.last.getValue();
    }
    getAtIndex(index) {
        if (this.isEmpty())
            return null;
        if (index < 0 || index >= this.length)
            return null;
        else if (index === 0)
            return this.getFirst();
        else if (index === this.length)
            return this.getLast();
        else {
            let temp = this.first.getNext();
            for (let i = 1; i < index; i++) {
                temp = temp.getNext();
            }
            return temp.getValue();
        }
    }
    getLength() {
        return this.length;
    }
    reverse() {
        if (this.isEmpty()) {
            console.log("List is empty");
        }
        else {
            let prev = null;
            let curr = this.first;
            this.last = this.first;
            let next = this.first.getNext();
            while (next !== null) {
                curr.setNext(prev);
                prev = curr;
                curr = next;
                next = next.getNext();
            }
            curr.setNext(prev);
            this.first = curr;
        }
    }
    search(value) {
        let temp = this.first;
        let index = 0;
        while (temp !== null) {
            if (temp.getValue() === value) {
                return index;
            }
            temp = temp.getNext();
            index++;
        }
        return null;
    }
    isEmpty() {
        return this.length === 0;
    }
    display() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.getValue());
            temp = temp.getNext();
        }
    }
}
exports.default = SinglyLinkedList;
class DoublyLinkedList extends LinkedListType {
    constructor() {
        super();
        this.first = this.last = null;
        this.length = 0;
    }
    insertFirst(value) {
        const node = new Node_1.DoublyLinkedNode(value);
        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            this.first.setPrevious(node);
            node.setNext(this.first);
            this.first = node;
        }
        this.length++;
    }
    insertLast(value) {
        const node = new Node_1.DoublyLinkedNode(value);
        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            this.last.setNext(node);
            node.setPrevious(this.last);
            this.last = node;
        }
        this.length++;
    }
    insertAtIndex(index, value) {
        if (index < 0 || index > this.length)
            console.log("Out of Range...");
        else if (index === 0)
            this.insertFirst(value);
        else if (index === this.length)
            this.insertLast(value);
        else {
            let temp;
            if (index < this.length / 2) {
                temp = this.first.getNext();
                for (let i = 1; i < index; i++) {
                    temp = temp.getNext();
                }
            }
            else {
                temp = this.last;
                for (let i = this.length - 1; i > index; i--) {
                    temp = temp.getPrevious();
                }
            }
            const node = new Node_1.DoublyLinkedNode(value);
            node.setNext(temp);
            temp.getPrevious().setNext(node);
            node.setPrevious(temp.getPrevious());
            temp.setPrevious(node);
            this.length++;
        }
    }
    removeFirst() {
        if (this.isEmpty())
            return null;
        const firstNode = this.first;
        if (this.length === 1) {
            this.first = this.last = null;
        }
        else {
            this.first = this.first.getNext();
            this.first.setPrevious(null);
        }
        this.length--;
        return firstNode.getValue();
    }
    removeLast() {
        if (this.isEmpty())
            return null;
        const lastNode = this.last;
        if (this.length === 1) {
            this.first = this.last = null;
        }
        else {
            this.last = this.last.getPrevious();
            this.last.setNext(null);
        }
        this.length--;
        return lastNode.getValue();
    }
    removeAtIndex(index) {
        if (this.isEmpty())
            return null;
        if (index < 0 || index > this.length)
            return null;
        else if (index === 0)
            return this.removeFirst();
        else if (index === this.length - 1)
            return this.removeLast();
        else {
            let temp;
            if (index < this.length / 2) {
                temp = this.first.getNext();
                for (let i = 1; i < index; i++) {
                    temp = temp.getNext();
                }
            }
            else {
                temp = this.last.getPrevious();
                for (let i = this.length - 2; i > index; i--) {
                    temp = temp.getPrevious();
                }
            }
            temp.getPrevious().setNext(temp.getNext());
            temp.getNext().setPrevious(temp.getPrevious());
            this.length--;
            return temp.getValue();
        }
    }
    removeByValue(value) {
        let deletedNode;
        if (this.first.getValue() === value) {
            deletedNode = this.removeFirst();
            return deletedNode;
        }
        if (this.last.getValue() === value) {
            deletedNode = this.removeLast();
            return deletedNode;
        }
        // let prev = this.first;
        let temp = this.first.getNext();
        while (temp != null) {
            if (temp.getValue() === value) {
                temp.getPrevious().setNext(temp.getNext());
                temp.getNext().setPrevious(temp.getPrevious());
                this.length--;
                return temp.getValue();
            }
            else
                temp = temp.getNext();
        }
        console.log("Not Found!");
        return null;
    }
    getFirst() {
        return (this.isEmpty()) ? null : this.first.getValue();
    }
    getLast() {
        return (this.isEmpty()) ? null : this.last.getValue();
    }
    getAtIndex(index) {
        if (this.isEmpty())
            return null;
        if (index < 0 || index >= this.length)
            return null;
        else if (index === 0)
            return this.getFirst();
        else if (index === this.length)
            return this.getLast();
        else {
            let temp;
            if (index < this.length / 2) {
                temp = this.first.getNext();
                for (let i = 1; i < index; i++) {
                    temp = temp.getNext();
                }
            }
            else {
                temp = this.last.getPrevious();
                for (let i = this.length - 2; i < index; i++) {
                    temp = temp.getPrevious();
                }
            }
            return temp.getValue();
        }
    }
    getLength() {
        return this.length;
    }
    reverse() {
        if (this.isEmpty())
            console.log("List is Empty");
        else {
            let curr = this.first;
            this.first = this.last;
            this.last = curr;
            let temp;
            while (curr !== null) {
                temp = new Node_1.DoublyLinkedNode(curr.getValue());
                temp.setNext(curr.getNext());
                temp.setPrevious(curr.getPrevious());
                curr.setNext(temp.getPrevious());
                curr.setPrevious(temp.getNext());
                curr = curr.getPrevious();
            }
        }
    }
    search(value) {
        let temp = this.first;
        let index = 0;
        while (temp !== null) {
            if (temp.getValue() === value) {
                return index;
            }
            temp = temp.getNext();
            index++;
        }
        return null;
    }
    isEmpty() {
        return this.length === 0;
    }
    display() {
        let temp = this.first;
        while (temp !== null) {
            console.log(temp.getValue());
            temp = temp.getNext();
        }
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
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
