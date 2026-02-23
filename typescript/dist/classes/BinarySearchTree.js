"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
const Tree_1 = __importDefault(require("../types/Tree"));
const LinkedQueue_1 = __importDefault(require("./LinkedQueue"));
const TreeNode_1 = require("./TreeNode");
class BinarySearchTree extends Tree_1.default {
    constructor() {
        super();
    }
    getRoot() {
        return this.root;
    }
    isEmpty() {
        return this.root === null;
    }
    search(value) {
        let traverser = this.root;
        while (traverser !== null) {
            if (value === traverser.getValue())
                return true;
            else if (value < traverser.getValue())
                traverser = traverser.getLeft();
            else
                traverser = traverser.getRight();
        }
        return false;
    }
    searchRec(value) {
        return this.searchByRecursion(this.root, value);
    }
    insert(value) {
        const newNode = new TreeNode_1.TreeNode(value);
        newNode.setLeft(null);
        newNode.setRight(null);
        if (this.root === null) {
            this.root = newNode;
            this.nodeCount++;
        }
        else {
            let traverser = this.root;
            let currentNode = traverser;
            while (traverser !== null) {
                currentNode = traverser;
                if (value === traverser.getValue()) {
                    console.log("Duplicated value..!");
                    return;
                }
                else if (value < traverser.getValue())
                    traverser = traverser.getLeft();
                else
                    traverser = traverser.getRight();
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
    remove(value) {
        if (this.root === null)
            console.log("Empty tree..!");
        else if (this.root.getValue() === value) {
            this.root = this.removeNode(this.root);
        }
        else {
            let traverser = this.root;
            let traverserParent = this.root;
            while (traverser !== null) {
                if (value === traverser.getValue()) {
                    if (traverserParent.getLeft() === traverser) {
                        traverserParent.setLeft(this.removeNode(traverser));
                    }
                    else if (traverserParent.getRight() === traverser) {
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
    clear() {
        this.root = null;
    }
    getHight() {
        return this.hight(this.root);
    }
    getNodeCount() {
        // return this.nodesCount(this.root);
        return this.nodeCount;
    }
    getLeavesCount() {
        return this.leavesCount(this.root);
    }
    // Breadth First Traversal
    levelOrderTraversal() {
        if (this.isEmpty()) {
            console.log("Empty tree..!");
            return;
        }
        const Q = new LinkedQueue_1.default();
        Q.push(this.root);
        let curr, left, right;
        while (!Q.isEmpty()) {
            curr = Q.pop();
            console.log(curr === null || curr === void 0 ? void 0 : curr.getValue());
            left = curr === null || curr === void 0 ? void 0 : curr.getLeft();
            if (left)
                Q.push(left);
            right = curr === null || curr === void 0 ? void 0 : curr.getRight();
            if (right)
                Q.push(right);
        }
    }
    // Depth First Traversal
    preOrderTraversal() {
        if (this.isEmpty()) {
            console.log("Empty tree..!");
            return;
        }
        const traverser = this.root;
        this.preOrder(traverser);
    }
    inOrderTraversal() {
        if (this.isEmpty()) {
            console.log("Empty tree..!");
            return;
        }
        const traverser = this.root;
        this.inOrder(traverser);
    }
    postOrderTraversal() {
        if (this.isEmpty()) {
            console.log("Empty tree..!");
            return;
        }
        const traverser = this.root;
        this.postOrder(traverser);
    }
    // Protected Methods
    searchByRecursion(node, value) {
        if (node === null)
            return false;
        else if (value === node.getValue())
            return true;
        else if (value < node.getValue())
            return this.searchByRecursion(node.getLeft(), value);
        else
            return this.searchByRecursion(node.getRight(), value);
    }
    removeNode(node) {
        if (node === null)
            return null;
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
            let current = node.getLeft();
            let currentParent = null;
            while ((current === null || current === void 0 ? void 0 : current.getRight()) !== null) {
                currentParent = current;
                current = current === null || current === void 0 ? void 0 : current.getRight();
            }
            node.setValue(current.getValue());
            if (currentParent === null)
                node.setLeft(current.getLeft());
            else
                currentParent.setRight(current.getLeft());
            this.nodeCount--;
            return node;
        }
    }
    hight(node) {
        if (node === null)
            return 0;
        else
            return 1 + Math.max(this.hight(node.getLeft()), this.hight(node.getRight()));
    }
    leavesCount(node) {
        if (node === null)
            return 0;
        else if (node.getLeft() == null && node.getRight() == null)
            return 1;
        else
            return this.leavesCount(node.getLeft()) + this.leavesCount(node.getRight());
    }
    nodesCount(node) {
        if (node === null)
            return 0;
        else
            return 1 + this.nodesCount(node.getLeft()) + this.nodesCount(node.getRight());
    }
    preOrder(traverser) {
        if (traverser !== null) {
            console.log(traverser.getValue());
            this.preOrder(traverser.getLeft());
            this.preOrder(traverser.getRight());
        }
        else
            return;
    }
    inOrder(traverser) {
        if (traverser !== null) {
            this.inOrder(traverser.getLeft());
            console.log(traverser.getValue());
            this.inOrder(traverser.getRight());
        }
    }
    postOrder(traverser) {
        if (traverser !== null) {
            this.postOrder(traverser.getLeft());
            this.postOrder(traverser.getRight());
            console.log(traverser.getValue());
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
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
