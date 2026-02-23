"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
const TreeNode_1 = __importDefault(require("../types/TreeNode"));
class TreeNode extends TreeNode_1.default {
    constructor(value) {
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
    setLeft(left) {
        this.left = left;
    }
    setRight(right) {
        this.right = right;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.TreeNode = TreeNode;
