export default abstract class TreeNodeType<T> {
  abstract getLeft(): TreeNodeType<T> | null;
  abstract getRight(): TreeNodeType<T> | null;
  abstract getValue(): T;
  abstract setLeft(left: TreeNodeType<T> | null): void;
  abstract setRight(right: TreeNodeType<T> | null): void;
  abstract setValue(value: T): void
}