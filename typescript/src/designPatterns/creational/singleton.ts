/**
 * Singleton pattern is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
 */
export class Singleton {
  private static instance: Singleton | null = null;
  private constructor() { }
  
  public static getInstance() {
    if (this.instance === null) this.instance = new Singleton();
    return this.instance;
  }
}

const test1: Singleton = Singleton.getInstance();
const test2: Singleton = Singleton.getInstance();
console.log(test1 === test2);