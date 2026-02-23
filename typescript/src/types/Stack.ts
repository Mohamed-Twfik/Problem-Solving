export default abstract class StackType<T> {
  abstract push(value: T): void
  abstract pop(): T | null
  abstract getTop(): T | null
  abstract isEmpty(): boolean
  abstract getLength(): number
  abstract display(): void
}