class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;
  }

  enqueue(val) {
    this.storage[this.i] = val;
    this.i++;
  }
  dequeue() {
    //
  }
  size() {
    return this.i;
  }
}
