"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = __importDefault(require("../types/Queue"));
const Node_1 = require("./Node");
class LinkedQueue extends Queue_1.default {
    constructor() {
        super();
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    push(value) {
        var _a;
        const newNode = new Node_1.LinkedNode(value);
        if (this.isEmpty()) {
            this.rear = this.front = newNode;
        }
        else {
            (_a = this.rear) === null || _a === void 0 ? void 0 : _a.setNext(newNode);
            this.rear = newNode;
        }
        this.length++;
    }
    pop() {
        if (!this.isEmpty()) {
            const deletedElement = this.front;
            this.front = this.front.getNext();
            this.length--;
            return deletedElement.getValue();
        }
        else
            return null;
    }
    getFront() {
        return (this.isEmpty()) ? null : this.front.getValue();
    }
    getRear() {
        return (this.isEmpty()) ? null : this.rear.getValue();
    }
    getLength() {
        return this.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    display() {
        let temp = this.front;
        while (temp !== null) {
            console.log(temp.getValue());
            temp = temp.getNext();
        }
    }
}
exports.default = LinkedQueue;
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
