"use strict";
class DynamicArray {
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.array = new Array(capacity);
    }
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of range');
        }
        return this.array[index];
    }
    set(index, value) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of range');
        }
        this.array[index] = value;
    }
    pushback(value) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.array[this.size++] = value;
    }
    popback() {
        if (this.size === 0) {
            throw new Error('Array is empty');
        }
        return this.array[--this.size];
    }
    resize() {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
    getSize() {
        return this.size;
    }
    getCapacity() {
        return this.capacity;
    }
}
