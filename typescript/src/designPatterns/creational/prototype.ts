
/**
 * Prototype pattern is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
 */
export class Prototype {
  private field: number = 1;

  constructor(prototype?: Prototype) {
    if (prototype) {
      this.field = prototype.field;
    }
  }

  clone() {
    return new Prototype(this)
  }

  setField(num: number) {
    this.field = num;
  }
}

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