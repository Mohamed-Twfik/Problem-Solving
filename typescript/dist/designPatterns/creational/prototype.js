"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prototype = void 0;
/**
 * Prototype pattern is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
 */
class Prototype {
    constructor(prototype) {
        this.field = 1;
        if (prototype) {
            this.field = prototype.field;
        }
    }
    clone() {
        return new Prototype(this);
    }
    setField(num) {
        this.field = num;
    }
}
exports.Prototype = Prototype;
// const p1 = new Prototype();
// console.log(p1)
// const p2 = p1.clone();
// const p3 = p1;
// console.log(p2)
// console.log(p3)
// console.log("--------------------------------")
// p2.setField(2)
// console.log(p1)
// console.log(p2)
// console.log("--------------------------------")
// p3.setField(3)
// console.log(p1)
// console.log(p3)
