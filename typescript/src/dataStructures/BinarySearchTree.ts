import TreeType from "../types/Tree";
import LinkedQueue from "./LinkedQueue";
import { TreeNode } from "./TreeNode";

export class BinarySearchTree<T> extends TreeType<T> {
  constructor() {
    super();
  }

  getRoot(): TreeNode<T> | null {
    return this.root;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  search(value: T): boolean {
    let traverser: TreeNode<T> | null = this.root;
    while (traverser !== null) {
      if (value === traverser.getValue()) return true;
      else if (value < traverser.getValue()) traverser = traverser.getLeft();
      else traverser = traverser.getRight();
    }
    return false;
  }

  searchRec(value: T): boolean {
    return this.searchByRecursion(this.root, value);
  }

  insert(value: T): void {
    const newNode = new TreeNode<T>(value);
    newNode.setLeft(null);
    newNode.setRight(null);
    
    if (this.root === null) {
      this.root = newNode;
      this.nodeCount++;
    } else {
      let traverser: TreeNode<T> | null = this.root;
      let currentNode: TreeNode<T> = traverser;
      while (traverser !== null) {
        currentNode = traverser;
        if (value === traverser.getValue()) {
          console.log("Duplicated value..!");
          return;
        }
        else if (value < traverser.getValue()) traverser = traverser.getLeft();
        else traverser = traverser.getRight();
      }

      if (value <= currentNode.getValue()) {
        currentNode.setLeft(newNode);
        this.nodeCount++;
      }
      else {
        currentNode.setRight(newNode);
        this.nodeCount++;
      }
    }
  }

  remove(value: T): void {
    if (this.root === null) console.log("Empty tree..!");
    else if (this.root.getValue() === value) {
      this.root = this.removeNode(this.root);

    }
    else {
      let traverser: TreeNode<T> | null = this.root;
      let traverserParent: TreeNode<T> | null = this.root;

      while (traverser !== null) {
        if (value === traverser.getValue()) {
          if (traverserParent.getLeft() === traverser) {
            traverserParent.setLeft(this.removeNode(traverser));
          } else if (traverserParent.getRight() === traverser) {
            traverserParent.setRight(this.removeNode(traverser));
          }
          return;
        }
        else if (value < traverser.getValue()) {
          traverserParent = traverser;
          traverser = traverser.getLeft();
        }
        else {
          traverserParent = traverser;
          traverser = traverser.getRight();
        }
      }
      console.log("Element not found..!");
    }
  }

  clear(): void {
    this.root = null;
  }

  getHight(): number {
    return this.hight(this.root);
  }
  
  getNodeCount(): number {
    // return this.nodesCount(this.root);
    return this.nodeCount;
  }

  getLeavesCount(): number {
    return this.leavesCount(this.root);
  }

  // Breadth First Traversal
  levelOrderTraversal(): void {
    if (this.isEmpty()) {
      console.log("Empty tree..!");
      return;
    }

    const Q = new LinkedQueue<TreeNode<T>>();
    Q.push(this.root as TreeNode<T>);

    let curr, left, right;
    while (!Q.isEmpty()) {
      curr = Q.pop();
      console.log(curr?.getValue());
      left = curr?.getLeft();
      if (left) Q.push(left);
      right = curr?.getRight();
      if (right) Q.push(right);
    }
  }

  // Depth First Traversal
  preOrderTraversal(): void {
    if (this.isEmpty()) {
      console.log("Empty tree..!");
      return;
    }

    const traverser = this.root;
    this.preOrder(traverser);
  }

  inOrderTraversal(): void {
    if (this.isEmpty()) {
      console.log("Empty tree..!");
      return;
    }

    const traverser = this.root;
    this.inOrder(traverser);
  }

  postOrderTraversal(): void {
    if (this.isEmpty()) {
      console.log("Empty tree..!");
      return;
    }

    const traverser = this.root;
    this.postOrder(traverser);
  }

  // Protected Methods
  protected searchByRecursion(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) return false;
    else if (value === node.getValue()) return true;
    else if (value < node.getValue()) return this.searchByRecursion(node.getLeft(), value);
    else return this.searchByRecursion(node.getRight(), value);
  }

  protected removeNode(node: TreeNode<T> | null): TreeNode<T> | null {
    if (node === null) return null;
    if (node.getLeft() === null && node.getRight() === null) {
      this.nodeCount--;
      return null;
    }
    else if (node.getLeft() === null) {
      this.nodeCount--;
      return node.getRight();
    }
    else if (node.getRight() === null) {
      this.nodeCount--;
      return node.getLeft();
    }
    else {
      let current: TreeNode<T> | null = node.getLeft();
      let currentParent: TreeNode<T> | null = null;
      while (current?.getRight() !== null) {
        currentParent = current;
        current = current?.getRight() as TreeNode<T> | null;
      }
      node.setValue(current.getValue());

      if (currentParent === null) node.setLeft(current.getLeft());
      else currentParent.setRight(current.getLeft());
      this.nodeCount--;
      return node;
    }
  }

  protected hight(node: TreeNode<T> | null): number {
    if (node === null) return 0;
    else return 1 + Math.max(this.hight(node.getLeft()), this.hight(node.getRight()));
  }

  protected leavesCount(node: TreeNode<T> | null): number {
    if (node === null) return 0;
    else if(node.getLeft() == null && node.getRight() == null) return 1
    else return this.leavesCount(node.getLeft()) + this.leavesCount(node.getRight());
  }

  protected nodesCount(node: TreeNode<T> | null): number {
    if (node === null) return 0;
    else return 1 + this.nodesCount(node.getLeft()) + this.nodesCount(node.getRight());
  }

  protected preOrder(traverser: TreeNode<T> | null) {
    if (traverser !== null) {
      console.log(traverser.getValue());
      this.preOrder(traverser.getLeft());
      this.preOrder(traverser.getRight());
    } else return;
  }

  protected inOrder(traverser: TreeNode<T> | null) {
    if (traverser !== null) {
      this.inOrder(traverser.getLeft());
      console.log(traverser.getValue());
      this.inOrder(traverser.getRight());
    }
  }

  protected postOrder(traverser: TreeNode<T> | null) {
    if (traverser !== null) {
      this.postOrder(traverser.getLeft());
      this.postOrder(traverser.getRight());
      console.log(traverser.getValue());
    }
  }
}

// const tree = new BinarySearchTree<number>();

// console.log(tree.getNodeCount());
// console.log(tree.isEmpty());
// console.log(tree.getRoot());

// tree.insert(10);

// tree.insert(12);

// tree.insert(19);

// tree.insert(8);

// tree.insert(6);

// tree.insert(9);

// tree.insert(11);

// tree.insert(20);

// tree.insert(18);

// tree.insert(11.4);

// tree.insert(11.6);

// tree.insert(10.6);

// tree.insert(10.4);

// console.log("-----------------------------------------------------------------------")

// console.log(tree.getRoot());
// console.log(tree.isEmpty());
// console.log(tree.getNodeCount());
// console.log(tree.getHight());
// console.log(tree.getLeavesCount());
// console.log(tree.search(20));
// console.log(tree.search(17));
// console.log(tree.searchRec(20));
// console.log(tree.searchRec(17));

// tree.remove(11);
// tree.remove(17);
// tree.remove(9);
// tree.remove(12);
// tree.clear()

// console.log("-----------------------------------------------------------------------")
// console.log(tree.getNodeCount());
// console.log(tree.isEmpty());
// console.log(tree.getRoot());

// tree.levelOrderTraversal();
// tree.preOrderTraversal();
// tree.inOrderTraversal();
// tree.postOrderTraversal();