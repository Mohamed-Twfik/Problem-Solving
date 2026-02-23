"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("../types/Stack"));
const Node_1 = require("./Node");
class StackLinkedList extends Stack_1.default {
    constructor() {
        super();
        this.top = null;
        this.length = 0;
    }
    isEmpty() {
        return this.top === null;
    }
    getTop() {
        if (this.top === null)
            return null;
        else
            return this.top.getValue();
    }
    push(value) {
        const node = new Node_1.LinkedNode(value);
        if (this.top === null) {
            this.top = node;
        }
        else {
            node.setNext(this.top);
            this.top = node;
        }
        this.length++;
    }
    pop() {
        if (this.top === null) {
            return null;
        }
        else {
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
            console.log(i.getValue());
            i = i.getNext();
        }
    }
}
exports.default = StackLinkedList;
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
