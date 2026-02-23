"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedNode = exports.LinkedNode = void 0;
const Node_1 = require("../types/Node");
class LinkedNode extends Node_1.NodeType {
    constructor(value) {
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
    setNext(next) {
        this.next = next;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.LinkedNode = LinkedNode;
class DoublyLinkedNode extends Node_1.DoublyNodeType {
    constructor(value) {
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
    setNext(next) {
        this.next = next;
    }
    setPrevious(previous) {
        this.previous = previous;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.DoublyLinkedNode = DoublyLinkedNode;
