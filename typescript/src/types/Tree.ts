import { TreeNode } from "../dataStructures/TreeNode";

export default abstract class TreeType<T> {
  protected root: TreeNode<T> | null = null;
  protected nodeCount: number = 0;

  abstract getRoot(): TreeNode<T> | null
  abstract isEmpty(): boolean

  abstract search(value: T): boolean
  abstract searchRec(value: T): boolean

  abstract insert(value: T): void
  abstract remove(value: T): void
  abstract clear(): void

  abstract getHight(): number
  abstract getNodeCount(): number
  abstract getLeavesCount(): number
  abstract levelOrderTraversal(): void
  abstract preOrderTraversal(): void
  abstract inOrderTraversal(): void
  abstract postOrderTraversal(): void

  protected abstract searchByRecursion(node: TreeNode<T> | null, value: T): boolean
  protected abstract removeNode(node: TreeNode<T>): TreeNode<T> | null
  protected abstract hight(root: TreeNode<T> | null): number
  protected abstract leavesCount(node: TreeNode<T> | null): number
  protected abstract nodesCount(node: TreeNode<T> | null): number
  protected abstract preOrder(traverser: TreeNode<T> | null): void
  protected abstract inOrder(traverser: TreeNode<T> | null): void
  protected abstract postOrder(traverser: TreeNode<T> | null): void
}