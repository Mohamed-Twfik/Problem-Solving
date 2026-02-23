export default abstract class QueueType<T> {
  abstract push(value: T): void
  abstract pop(): T | null
  abstract getFront(): T | null
  abstract getRear(): T | null
  abstract getLength(): number
  abstract isEmpty(): boolean
  abstract display(): void
}