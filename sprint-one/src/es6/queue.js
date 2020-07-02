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
    if (this.i < 1) {
      return this.i;
    }
    var first = this.storage[0];
    for (var i = 1; i < this.i; i++) {
      this.storage[i - 1] = this.storage[i];
    }

    delete this.storage[this.i - 1];
    this.i--;
    return first;
  }
  size() {
    return this.i;
  }
}
