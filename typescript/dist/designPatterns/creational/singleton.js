"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
/**
 * Singleton pattern is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
 */
class Singleton {
    constructor() { }
    static getInstance() {
        if (this.instance === null)
            this.instance = new Singleton();
        return this.instance;
    }
}
exports.Singleton = Singleton;
Singleton.instance = null;
const test1 = Singleton.getInstance();
const test2 = Singleton.getInstance();
console.log(test1 === test2);
