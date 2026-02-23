"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = __importDefault(require("../types/Stack"));
class StackArray extends Stack_1.default {
    constructor() {
        super();
        this.top = -1;
        this.stack = [];
    }
    isEmpty() {
        return this.top === -1;
    }
    push(value) {
        this.top++;
        this.stack[this.top] = value;
    }
    pop() {
        if (this.top !== -1) {
            const deletedElement = this.stack[this.top];
            this.top--;
            return deletedElement;
        }
        else {
            console.log("Stack is Empty");
            return null;
        }
        ;
    }
    getTop() {
        if (this.top === -1)
            return null;
        else
            return this.stack[this.top];
    }
    getLength() {
        return this.top + 1;
    }
    display() {
        for (let i = this.top; i >= 0; i--)
            console.log(this.stack[i]);
    }
}
exports.default = StackArray;
// const stack = new StackArray<number>();
// console.log(stack.isEmpty());
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack.pop());
// console.log(stack.getTop());
// stack.display();
