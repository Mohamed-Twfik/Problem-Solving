"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = __importDefault(require("../types/Queue"));
class QueueArray extends Queue_1.default {
    constructor(maxSize) {
        super();
        this.Queue = [];
        this.front = 0;
        this.length = 0;
        if (maxSize <= 0)
            this.maxSize = 10;
        else
            this.maxSize = maxSize;
        this.rear = maxSize - 1;
    }
    push(value) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.maxSize;
            this.Queue[this.rear] = value;
            this.length++;
        }
        else
            console.log("Queue is Full");
    }
    pop() {
        if (!this.isEmpty()) {
            const deletedElement = this.Queue[this.front];
            this.front = (this.front + 1) % this.maxSize;
            this.length--;
            return deletedElement;
        }
        else {
            console.log("Queue is Empty");
            return null;
        }
    }
    getFront() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return null;
        }
        return this.Queue[this.front];
    }
    getRear() {
        if (this.isEmpty()) {
            console.log("Queue is Empty");
            return null;
        }
        return this.Queue[this.rear];
    }
    getLength() {
        return this.length;
    }
    isEmpty() {
        return this.length === 0;
    }
    isFull() {
        return this.length === this.maxSize;
    }
    display() {
        for (let i = this.front; i !== this.rear;) {
            console.log(this.Queue[i]);
            i = (i + 1) % this.maxSize;
        }
        console.log(this.Queue[this.rear]);
    }
}
exports.default = QueueArray;
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
