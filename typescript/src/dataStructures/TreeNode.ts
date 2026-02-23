import TreeNodeType from "../types/TreeNode";

export class TreeNode<T> extends TreeNodeType<T> {
  private value: T;
  private left: TreeNode<T> | null;
  private right: TreeNode<T> | null;

  constructor(value: T) {
    super();
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  getValue() {
    return this.value;
  }

  setLeft(left: TreeNode<T> | null) {
    this.left = left;
  }

  setRight(right: TreeNode<T> | null) {
    this.right = right;
  }

  setValue(value: T): void {
    this.value = value;
  }
}