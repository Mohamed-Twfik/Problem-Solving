export abstract class NodeType<T> {
  abstract getNext(): NodeType<T> | null;
  abstract getValue(): T;
  abstract setNext(next: NodeType<T> | null): void;
  abstract setValue(value: T): void
}

export abstract class DoublyNodeType<T> extends NodeType<T> {
  abstract getPrevious(): DoublyNodeType<T> | null;
  abstract setPrevious(previous: DoublyNodeType<T> | null): void;
} 