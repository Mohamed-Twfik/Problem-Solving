interface DynamicArray {
  get(index: number): any;
  set(index: number, value: any): void;
  pushback(value: any): void;
  popback(): any;
  resize(): void;
  getSize(): number;
  getCapacity(): number;
}
class DynamicArray implements DynamicArray {
  private size: number;
  private capacity: number;
  private array;

  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.array = new Array(capacity);
  }

  get(index: number): any {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range');
    }
    return this.array[index];
  }

  set(index: number, value: any): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range');
    }
    this.array[index] = value;
  }

  pushback(value: any): void {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.array[this.size++] = value;
  }

  popback(): any {
    if (this.size === 0) {
      throw new Error('Array is empty');
    }
    return this.array[--this.size];
  }

  resize(): void {
    this.capacity *= 2;
    const newArray = new Array(this.capacity);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity
  }
}